<?php

$plugin = array(
  'title' => t('Hourly Message Digest'),
  'description' => t('Send Message via hourly digest.'),
  'class' => 'MessageDigestHour',
  'view_modes' => array(
    'message_notify_hour_digest' => array('label' => t('Notify - Hourly digest')),
  ),
);
