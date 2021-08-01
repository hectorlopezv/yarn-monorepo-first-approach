#!/bin/bash
lerna create $1 --yes
dir=$(pwd)
cd  packages/$2
sudo rm -rf __tests__
cd ..
lerna add --dev @libProv/builder --scope=$1
lerna add react --peer --scope=$1
lerna add $1 --scope=@libProv/proveedores
