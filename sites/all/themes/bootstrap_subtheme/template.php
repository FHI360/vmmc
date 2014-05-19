<?php

/**
 * @file
 * template.php
 */
function bootstrap_subtheme_form_alter(&$form, &$form_state, $form_id) {
  switch ($form_id) {
    case 'user_login_block': // Log-in block form.
    case 'user_login': // Log-in form.
//    case 'user_register_form': // Register form.
//    case 'user_profile_form': // Register form.
      // Username
      //$form['name']['#attributes']['autocomplete'] = 'off';
      $form['#attributes']['autocomplete'] = 'off';

      // Password
      $form['pass']['#attributes']['autocomplete'] = 'off';
 //     $form['pass']['pass1']['#attributes']['autocomplete'] = 'off';
 //     $form['pass[pass2]']['#attributes']['autocomplete'] = 'off';
      break;
  }
}


