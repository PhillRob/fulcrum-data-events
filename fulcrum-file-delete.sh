#!/bin/bash
## deletes all files not in NOT listed in CSV
INPUT=del.csv
OLDIFS=$IFS
COUNT=0
IFS=,
[ ! -f $INPUT ] && { echo "$INPUT file not found"; exit 99; }
while read -a csv_line
do
	# echo "${csv_line[0]}.jpg file found"
	let COUNT=COUNT+1
	echo $COUNT
	# echo ${csv_line[0]}.jpg
	find /Users/philipp/Downloads/gr_tree_assessment . -name ${csv_line[0]}.jpg -type f -exec rm -v {} \;
	# find -not -name ${csv_line[0]}.jpg -type f -exec rm -v {} \;
done < $INPUT

