<?php

namespace Drupal\related_nodes\Plugin\Block;
use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'Related Nodes' Block
 *
 * @Block(
 *   id = "related_nodes",
 *   admin_label = @Translation("Related Nodes"),
 * )
 */
class RelatedNodes extends BlockBase {
  /**
   * {@inheritdoc}
   */
  public function build() {
    return [
        '#theme' => 'related_nodes',
        '#nodes' => get_related_nodes(),
    ];
  }
}