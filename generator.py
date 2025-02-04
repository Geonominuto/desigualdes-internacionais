import json
def create_timeline_data():
    timeline_data = [
      {
        "year": 1750,
        "text": "Início da Revolução Industrial na Inglaterra",
         "url":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Cromford_Mill.jpg/800px-Cromford_Mill.jpg",
        "alt":"imagem de uma indústria do século XVIII"
      },
      {
         "year": 1800,
        "text": "Expansão do comércio marítimo e das colônias",
        "url":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/The_Arrival_of_Columbus_at_San_Salvador_October_12th_1492_by_John_Vanderlyn.jpg/1280px-The_Arrival_of_Columbus_at_San_Salvador_October_12th_1492_by_John_Vanderlyn.jpg",
         "alt":"A chegada de Colombo a América"
      },
      {
           "year": 1870,
        "text": "Segunda Revolução Industrial e o imperialismo",
        "url":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Imperialismus.jpg/1920px-Imperialismus.jpg",
        "alt":"Mapa da divisão da África"
      },
      {
           "year": 1945,
          "text": "Pós Segunda Guerra e o mundo bipolar",
          "url":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/World_War_II_Alliances.svg/1920px-World_War_II_Alliances.svg.png",
          "alt":"mapa da aliança da segunda guerra"
      }
      ,
       {
           "year": 1990,
          "text": "A globalização e o mundo multipolar",
           "url":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Global_Connectivity_Map.svg/1920px-Global_Connectivity_Map.svg.png",
          "alt":"mapa da globalização"
      }
    ]

    map_url = get_map_url()
    data = {
      "timeline_data":timeline_data,
      "map_url":map_url
    }
    with open("data.json", "w") as json_file:
      json.dump(data, json_file)

def get_map_url():
   map_url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/World_industrial_zones_map.png/1920px-World_industrial_zones_map.png'
   return map_url

if __name__ == "__main__":
  create_timeline_data()
  print(f"data.json criado")