<?php

$plugin = array(
  'title' => t('15 Minutes Message Digest'),
  'description' => t('Send Message via 15 minutes digest.'),
  'class' => 'MessageDigestQuarter',
  'view_modes' => array(
    'message_notify_quarter_digest' => array('label' => t('Notify - 15 Minutes digest')),
  ),
);
