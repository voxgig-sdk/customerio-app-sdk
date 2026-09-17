<?php
declare(strict_types=1);

// CustomerioApp SDK base feature

class CustomerioAppBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(CustomerioAppContext $ctx, array $options): void {}
    public function PostConstruct(CustomerioAppContext $ctx): void {}
    public function PostConstructEntity(CustomerioAppContext $ctx): void {}
    public function SetData(CustomerioAppContext $ctx): void {}
    public function GetData(CustomerioAppContext $ctx): void {}
    public function GetMatch(CustomerioAppContext $ctx): void {}
    public function SetMatch(CustomerioAppContext $ctx): void {}
    public function PrePoint(CustomerioAppContext $ctx): void {}
    public function PreSpec(CustomerioAppContext $ctx): void {}
    public function PreRequest(CustomerioAppContext $ctx): void {}
    public function PreResponse(CustomerioAppContext $ctx): void {}
    public function PreResult(CustomerioAppContext $ctx): void {}
    public function PreDone(CustomerioAppContext $ctx): void {}
    public function PreUnexpected(CustomerioAppContext $ctx): void {}
}
