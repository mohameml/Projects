"""Class to represent a Todo"""

class Todo :

    def __init__(self):
        self.id = 0
        self.title = ""
        self.done = False
        self.category = ""
        self.priority = 0

    def __str__(self):
        return f"{self.id} - {self.title}  - {self.done}"
    
    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "done": self.done,
            "category": self.category,
            "priority": "High" if self.priority == 1 else "Medium" if self.priority == 2 else "Low"
        }
    def from_dict(self, data):
        self.id = data["id"]
        self.title = data["title"]
        self.description = data["description"]
        self.done = data["done"]
    
    # def from_json(self, json_data):
    #     data = json.loads(json_data)
    #     self.from_dict(data)
