#!/bin/bash

# Load the repos to run the command on
REPOS=$(cat ../keg-changed-repos.txt)

# Loop over the repos and run the passed in command on them
keg_run_cmd(){

  for REPO_PATH in "$REPOS"; do
    cd $REPO_PATH
    for CMD in "$@"; do
      if [[ "$CMD" ]]; then
        yarn "$CMD"
      fi
    done
  done
}

# Run yarn install before runnign yarn command
# Ensure we have all repo dependencies
keg_run_install(){
  for REPO_PATH in "$REPOS"; do
    cd $REPO_PATH
    yarn install
  done
}

keg_run_yarn_cmd(){
  keg_run_install
  keg_run_cmd "$@"
}

keg_run_yarn_cmd "$@"
