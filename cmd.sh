type=$1
slice=$2

mkdir -p ./src/${type}/$slice
touch ./src/${type}/$slice/code.ts
touch ./src/${type}/$slice/model.ts
echo "import { ${slice} } from 'es-toolkit';" > ./src/${type}/$slice/${slice}.ts
touch ./src/${type}/$slice/${slice}.spec.ts