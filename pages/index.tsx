import { useState } from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import styles from "../styles/login.module.css";
import axios from "axios";

const Home: NextPage = () => {
  const [username, setUsername] = useState<string>("");
  const [isFetching, setIsFetching] = useState<boolean>(false);

  function resetForm() {
    setUsername("");
  }

  const router = useRouter();

  async function handleSubmit(event: any) {
    setIsFetching(true);
    event?.preventDefault();

    const response = await axios.get(
      `https://api.sleeper.app/v1/user/${username}`
    );

    const user = response.data;

    if (user) {
      setIsFetching(false);
      router.push({
        pathname: "user/[id]/leagues",
        query: { id: user.user_id },
      });
    }
    setIsFetching(false);
  }

  function handleChange(event: any): void {
    setUsername(event.target.value);
  }

  return (
    <div className={styles.container}>
      <form className={styles.formContainer}>
        <div className={styles.innerContainer}>
          <h3 className={styles.formHeader}>Sign In</h3>
          <p className={styles.formDescription}>
            Access your Sleeper fantasy football league by providing your
            username below
          </p>
          <div className={styles.inputContainer}>
            <label className={styles.inputLabel} htmlFor="username">
              Username
            </label>
            <input
              onChange={handleChange}
              className={styles.input}
              type="text"
              id="username"
            />
          </div>
          <button
            type="submit"
            className={styles.button}
            onClick={handleSubmit}
          >
            {isFetching ? (
              <Loader type="ThreeDots" color="white" height={40} width={25} />
            ) : (
              "Sign in"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Home;
