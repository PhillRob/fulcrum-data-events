#!/bin/bash
## renames all files to include data in a certain column 
INPUT = data.csv
OLDIFS=$IFS
IFS=,
[ ! -f $INPUT ] && { echo "$INPUT file not found"; exit 99; }
while read -a csv_line
do
	mv ${csv_line[0]}.pdf ${csv_line[14]}-${csv_line[0]}.pdf
done < $INPUT