import json 
import unittest

# Opening JSON file 
f = open('infos.json',) 
  
# returns JSON object as  
# a dictionary 
data = json.load(f) 
""" 
# Iterating through the json 
# list 
for i in data['Client']: 
    print(i) 
"""  
# Closing file 
f.close()

"""
class UnitTest(unittest.TestCase):

    def test_equal(self):
        self.assertEqual(10, 1)

if __name__ == '__main__':
    unittest.main()
"""

def getMarge(i):
    return data["Client"][i]["Contrat"][0]["marge"]


def getPrice(idProduit, idClient):
    d = data["Produit"][idProduit]["prix"]
    result = d + (d * 0.2) + (d * (getMarge(idClient) / 100))
    return result


class UnitTest(unittest.TestCase):

    def test_price(self):
        self.assertEqual(getPrice(0, 1), 116.87)
        
        
    
    def test_price2(self):
        self.assertEqual(getPrice(2, 1), 65.0)


if __name__ == '__main__':
    unittest.main()