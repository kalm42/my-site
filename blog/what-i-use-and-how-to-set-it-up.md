---
path: /uses
slug: uses
date: 2020-04-18T19:35:19.147Z
title: What I use and how to set it up
---
This is more an instructional for me since I've had to setup a computer twice now so I'd rather not have to hunt down all these again.

# Software
- [Firefox](https://www.mozilla.org/en-US/firefox/new/)
- [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/)
- [Chrome](https://www.google.com/chrome/)
- [Chrome Canary](https://www.google.com/chrome/canary/)
- [Postman](https://www.postman.com/)
- [Notion](https://www.notion.so)
- [Hyper](https://hyper.is/)
- [VS Code](https://code.visualstudio.com/)
- [nvm](https://github.com/nvm-sh/nvm)

# Terminal Sugar
- [Zsh](https://github.com/ohmyzsh/ohmyzsh/wiki/Installing-ZSH)
- [Oh-My-Zsh](https://ohmyz.sh/)

## [Colbalt2 for Hyper](https://github.com/wesbos/hyperterm-cobalt2-theme/)
### Installing
1. Edit your ~/.hyper.js config file `vim ~/.hyper.js`
2. Add hyperterm-cobalt2-theme to your plugins array. Kinda like this:
```javascript
plugins: [
  'hyperterm-cobalt2-theme'
],
```
3. Update the font
```javascript
  fontFamily: '"Dank Mono", ...
```
## [Cobalt2 for Zsh](https://github.com/wesbos/Cobalt2-iterm/)
### Installing
1. `git clone https://github.com/wesbos/Cobalt2-iterm.git`
2. `cd Cobalt2-iterm`
3. `cp cobalt2.zsh-theme ~/.oh-my-zsh/themes/`
4. `cd ..`
5. `vim ~/.zshrc`
6. Change the theme variable to `ZSH_THEME="cobalt2"`

# Fonts
- [Dank Mono](https://dank.sh/)
- Powerline Fonts
```
git clone https://github.com/powerline/fonts
cd fonts
./install.sh
cd ..
```
