<?php
declare(strict_types=1);

// CustomerioApp SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class CustomerioAppMakeContext
{
    public static function call(array $ctxmap, ?CustomerioAppContext $basectx): CustomerioAppContext
    {
        return new CustomerioAppContext($ctxmap, $basectx);
    }
}
