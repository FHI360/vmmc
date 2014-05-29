<?php

/**
 * Daily email notifier.
 */
class MessageDigestHour extends MessageDigest {
  public function getInterval() {
    return '1 hour';
  }
}
