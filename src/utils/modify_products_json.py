import json, csv

jsonFilePath = 'products.json'
trueLeafFilePath = 'tlproducts.csv'

with open('products.csv') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=',')
    first_line = True
    for row in csv_reader:
        if first_line:
            print(row)
            first_line = False
        
