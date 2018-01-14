## Required first

1. `brew -v` if it finds Homebrew, great! if not paste this in terminal `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
2. once you have Homebrew set up, `yarn -v` again, if it doesn't find a version number then `brew install yarn`
3. `bundler -v` if nothing is found, `gem install bundler`

# Local Setup

1. `cd` into a directory — i.e. `cd code/` or `cd documents/projects/website`
2. `git clone git@github.com:theindependentgroup/customswiper.git name-of-folder`
3. `cd` into that directory - i.e. `cd name-of-folder`
4. `yarn install && bundle install` this will install the necessary dev dependencies

## Working

1. `git pull` will grab the newest changes from Github before you begin working
1. `yarn start` will spin up a local server on localhost:3000. This should also give you any errors if formatting is wrong.
2. the /\_projects folder is where most of your edits are going to be. Each "stack" gets a file (you can make more on the fly) with a position for ordering, a featured image for SEO stuff, a hash for url (isaac.com#project), and an array of slides.
3. WARNING: this isn't actually HTML it is YAML, and it is super picky about tabs, spaces, etc. If something isn't loading there is probably an extra space somewhere. Also, keep all string values in double-quotes to minimize possible conflicts.
4. images go in /assets/images
5. about modal text is in the bottom of index.html
6. **when you make changes:**
7. `git add .` this will stage all files
8. `git commit -m 'commit message explaining changes'`-
9. `git push` sends the code to Github
10. If you are ready for this code to go live... `yarn deploy`
