# K W A N Z A A

Makosa ya kwanza.
Onyo la kwanza.
Sababu ya kwanza.

### Ignore

To uninstall Zed Editor from Ubuntu 22.04:

```bash
rm -rf $HOME/.local/zed.app
rm -rf $HOME/.local/bin/zed
rm -rf $HOME/.local/share/zed
rm -rf $HOME/.local/share/applications/dev.zed.Zed.desktop
```

Open ~/.bashrc with an Editor and delete the line: 

```bash
export PATH=$HOME/.local/bin:$PATH
```