<?php

namespace Drupal\newsletter_subscription\Plugin\Block;
use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'Newsletter Subscription' Block
 *
 * @Block(
 *   id = "newsletter_subscription",
 *   admin_label = @Translation("Newsletter Subscription"),
 * )
 */
class NewsletterSubscription extends BlockBase {
  /**
   * {@inheritdoc}
   */
  public function build() {
    return [
        '#theme' => 'newsletter_subscription',
    ];
  }
}