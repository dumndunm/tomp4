# tomp4

Command line utility for converting videos to .mp4 format.

Example:
```sh
tomp4 ~/path/to/video/file
```

The utility will delete the file located on this path and replace it with a file with the same name, but with the extension .mp4.

How to install
- `ffmpeg` utility must be installed on your computer

```sh
brew install ffmpeg
```
- clone the repository, then run the `npm pack` command

```sh
npm pack
```

- install the received package globally `(tomp4-1.0.0.tgz)`
```sh
npm install absolute/path/to/tomp4-1.0.0.tgz
```
