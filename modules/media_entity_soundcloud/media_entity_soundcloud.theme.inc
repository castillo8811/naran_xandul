<?php

/**
 * @file
 * Theme functions for the media_entity_soundcloud module.
 */
use Drupal\Core\Url;

/**
 * Prepares variables for media_entity_soundcloud templates.
 *
 * Default template: media-soundcloud-embed.html.twig.
 */
function template_preprocess_media_soundcloud_embed(&$variables) {
  // Build the embed url.
  $uri = 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/' . $variables['track_id'];

  // Build the query.
  $query = [];

  // Add visual.
  $query['visual'] = ($variables['type'] == 'visual');

  // Add options.
  foreach ($variables['options'] as $option => $value) {
    $query[$option] = $value == '0' ? 'false' : 'true';
  }

  $url = Url::fromUri($uri, ['query' => $query]);
  $variables['url'] = $url->toString();
}
