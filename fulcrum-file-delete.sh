#!/bin/bash
## deletes all files not in NOT listed in CVS
INPUT = data.csv
OLDIFS=$IFS
IFS=,
[ ! -f $INPUT ] && { echo "$INPUT file not found"; exit 99; }
while read -a csv_line
do
	find  -not -name ${csv_line[0]}.pdf -type f -exec rm -v {} \;
done < $INPUT