# Lab 8 & 9 -- SEG3125

### 0. Link to this webpage: https://seg3125-a.github.io/group44-lab8_9/
### 1. Group number: 44
### 2. Group members: Lisa Korolyov, Zechen Zhou
### 3. Link to the GitHub repository: https://github.com/SEG3125-A/group44-lab8_9
### 4. Each member's contribution:

>Lisa Korolyov
* 

>Zechen Zhou
* 

### 5. Snapshots of the website: 
  ![](/Docs/Images/snapshot1.png)

### 6. How to run the app:

#### 1. At the root of this directory, install the dependencies specified in the package.json file:

```bash
npm install
```

#### 2. To run the app on development:

```bash
npm start
```

#### 3. To run the app on production (if we want optimal performance):

Build the application:
```bash
npm run build
```

Install a Node.js package called "serve" using npm **_(one-time setting)_**:
```bash
npm install -g serve
```

Then serve it with a static server:
```bash
serve -s build
```

### 7. Notes： Deploy This React App To GitHub Pages:
Reference: https://github.com/gitname/react-gh-pages

#### 1. Install the `gh-pages` npm package and designate it as a development dependency:
```bash
npm install gh-pages --save-dev
```

#### 2. Add a `homepage` property to the `package.json` file
```diff
{
  "name": "my-app",
  "version": "1.0.0",
+ "homepage": "https://seg3125-a.github.io/group44-lab8_9/",
```

#### 3. Add deployment scripts to the `package.json` file
```diff
"scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
```

#### 4. Push the React app to the GitHub repository
By default, the new commit on the gh-pages branch will have a commit message of "Updates". (These commits will be apply to the `gh-pages` branch)
```bash
npm run deploy
```


_(optional: specify a custom commit message via the -m option)_
```bash
npm run deploy -- -m "comment..."
```

#### 5. Configure GitHub Pages
1. Navigate to the **GitHub Pages** settings page
   1. In your web browser, navigate to the GitHub repository
   2. Above the code browser, click on the tab labeled "Settings"
   3. In the sidebar, in the "Code and automation" section, click on "Pages"
2. Configure the "Build and deployment" settings like this: 
   1. **Source**: Deploy from a branch
   2. **Branch**: 
      - Branch: `gh-pages`
      - Folder: `/ (root)`
3. Click on the "Save" button