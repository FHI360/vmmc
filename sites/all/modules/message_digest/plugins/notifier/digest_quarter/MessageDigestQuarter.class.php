<?php

/**
 * Daily email notifier.
 */
class MessageDigestQuarter extends MessageDigest {
  public function getInterval() {
    return '5 minutes';
  }
}
