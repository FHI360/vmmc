<?php

/**
 * @file
 * template.php
 */
function bootstrap_subtheme_form_alter(&$form, &$form_state, $form_id) {
  switch ($form_id) {
    case 'user_login_block': // Log-in block form.
    case 'user_login': // Log-in form.
      // Username
      $form['name']['#attributes']['autocomplete'] = 'off';

      // Password
      $form['pass']['#attributes']['autocomplete'] = 'off';
      break;
  }
}


