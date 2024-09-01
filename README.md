# K W A N Z A A

Makosa ya kwanza.
Onyo la kwanza.
Sababu ya kwanza.

### Developer Set-up

Create a `.env.local` file with the following environment variables:

```
API_PER_PAGE=int:xxxxx
API_SORT=string:xxxxx
API_URL=string:xxxxx
IMAGE_URL=string:xxxxx
NEXT_PUBLIC_ANALYTICS_DATA_WEBSITE_ID=string:xxxxx
NEXT_PUBLIC_ANALYTICS_SHARE_URL=string:xxxxx
NEXT_PUBLIC_ANALYTICS_SITE_URL=string:xxxxx
NEXT_PUBLIC_APP_NAME=string:xxxxx
NEXT_PUBLIC_APP_EMAIL=string:xxxxx
NEXT_PUBLIC_BITCOIN_ADDRESS=string:xxxxx
NEXT_PUBLIC_DISCORD_URL=string:xxxxx
```

Happy coding!

### Ignore

To uninstall Zed Editor from Ubuntu 22.04:

```bash
rm -rf $HOME/.local/zed.app
rm -rf $HOME/.local/bin/zed
rm -rf $HOME/.local/share/zed
rm -rf $HOME/.local/share/applications/dev.zed.Zed.desktop
```

Open `~/.bashrc` with an Editor and delete the line: 

```bash
export PATH=$HOME/.local/bin:$PATH
```