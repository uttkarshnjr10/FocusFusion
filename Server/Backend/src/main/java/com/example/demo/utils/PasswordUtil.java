package com.example.demo.utils;

import org.apache.commons.codec.digest.DigestUtils;

public class PasswordUtil {
    public static String encodeSHA256(String password) {
        return DigestUtils.sha256Hex(password);
    }

    public static String encodeMD5(String password) {
        return DigestUtils.md5Hex(password);
    }
}
