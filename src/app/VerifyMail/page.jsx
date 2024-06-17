"use client";
import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from '@/CSS/VerifyEmailPage.module.css';

export default function VerifyEmailPage() {
    const [token, setToken] = useState("");
    const [verified, setVerified] = useState(false);
    const [error, setError] = useState(false);

    const verifyUserEmail = async () => {
        try {
            await axios.post('/api/verifyEmail', { token });
            setVerified(true);
        } catch (error) {
            setError(true);
            console.log(error.response.data);
        }
    }

    useEffect(() => {
        const urlToken = window.location.search.split("=")[1];
        setToken(urlToken || "");
    }, []);

    useEffect(() => {
        if (token.length > 0) {
            verifyUserEmail();
        }
    }, [token]);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Verify Email</h1>
            <h2 className={styles.token}>{token ? `${token}` : "No token"}</h2>

            {verified && (
                <div>
                    <h2 className={styles.message}>Email Verified</h2>
                    <Link href="/" className={styles.link}>
                        Home
                    </Link>
                </div>
            )}
            {error && (
                <div>
                    <h2 className={styles.error}>Error</h2>
                </div>
            )}
        </div>
    )
}
