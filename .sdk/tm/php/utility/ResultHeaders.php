<?php
declare(strict_types=1);

// CustomerioApp SDK utility: result_headers

class CustomerioAppResultHeaders
{
    public static function call(CustomerioAppContext $ctx): ?CustomerioAppResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
