<?php
declare(strict_types=1);

// CustomerioApp SDK exists test

require_once __DIR__ . '/../customerioapp_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = CustomerioAppSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
