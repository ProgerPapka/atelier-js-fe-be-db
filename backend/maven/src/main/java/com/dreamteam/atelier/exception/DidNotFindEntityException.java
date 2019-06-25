package com.dreamteam.atelier.exception;

public class DidNotFindEntityException extends Exception {

    public DidNotFindEntityException() {
        super("Entity didn't find in db!");
    }

    public DidNotFindEntityException(String message) {
        super(message);
    }

    public DidNotFindEntityException(String message, Throwable cause) {
        super(message, cause);
    }

    public DidNotFindEntityException(Throwable cause) {
        super(cause);
    }

    protected DidNotFindEntityException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
