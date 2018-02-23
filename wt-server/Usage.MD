# Usage

Quick cookbook.

[Source](https://github.com/vikasjayaram/ext-idp-api-webtask/tree/master/RS256)

## Secrets

CLIENT_ID

CLIENT_SECRET

ACCOUNT_NAME

## Deploy

Go into wt-server and run:

```
wt create ext_idp_webtask.js -s CLIENT_ID={} -s CLIENT_SECRET={} -s ACCOUNT_NAME={}
```

## EndPoint

You get the api endpoint url:

Call it with post method with:

```
{
    "headers": {
                "authorization": "Bearer token",
                "content-type": "application/json"  
            }
    "body": {
                "api_url": "https://sheets.googleapis.com/v4/spreadsheets/{your google sheet id}/values/Sheet1!A1:G2?majorDimension=COLUMNS",
                "user_id": "{get the user id from Auth0}"
            }
}
```
