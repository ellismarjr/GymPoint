#!/bin/bash

if [ "$#" -lt 1 ]
then
        echo "Usage mode: $0 start|stop"
        echo "Example $0 start"
        echo "Example $0 stop"
else
  if [ $1 = "start" ]
  then
    echo "Starting databases..."
  else
    echo "Stopping databases..."
  fi
  docker $1 database
fi

# open new tab terminal and execute the backend
gnome-terminal --tab -- bash -c "cd backend; yarn dev; exec bash"