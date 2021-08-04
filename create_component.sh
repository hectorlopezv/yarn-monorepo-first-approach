#!/bin/bash
# $1=libProv/component1
lerna create $1 --yes
dir=$(pwd)
lerna add --dev @libprov/builder --scope=$1
lerna add react --peer --scope=$1
lerna add $1 --scope=@libprov/proveedores
