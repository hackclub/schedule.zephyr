# Quick setup

```
touch index.html
echo "<h1>Hello from http://schedule.zephyr</h1>" >> index.html
curl http://schedule.zephyr/
```

While connected to zephyrnet wifi, go to http://schedule.zephyr/ (slash is important!) in your browser.

##...or run a server

```
touch server.js
echo "const PORT = process.env.PORT; /* place server code here */" >> server.js

touch entrypoint.js
echo 'node server.js' >> entrypoint.js

git add -A
git commit -m "Initial commit"
git push deploy
```

While connected to zephyrnet wifi, go to http://schedule.zephyr/ (slash is important!) in your browser.

##...or run a build on each push

```
touch build.sh
echo "yarn install" >> build.sh
git add build.sh
git commit -m "Add build script"
git push deploy
```

##...or work from your laptop
```
git clone zephyrnet.hackclub.com:/opt/zephyrnet/schedule.zephyr/.git
cd schedule.zephyr/
git remote add deploy git@zephyrnet.hackclub.com:/opt/zephyr/watcher/repos/schedule.zephyr
```

##...or push an existing repo from the command line

```
# in this folder
rm README.md
# on your laptop
git remote add origin git@zephyrnet.hackclub.com:/opt/zephyrnet/schedule.zephyr/.git
git remote add deploy git@zephyrnet.hackclub.com:/etc/zephyr/watcher/repos/schedule.zephyr
git branch -M main
git push -u origin main # this pushes to this repo
git push deploy # this deploys your dynamic server
```