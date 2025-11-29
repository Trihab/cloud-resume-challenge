from json import dump,loads
import markdown
from pathlib import Path

base=Path(__file__).resolve().parent.parent.parent
data_path = base / "backend" / "data" / "projects.json"
output_path = base / "frontend" / "src" / "data" / "projectData.json"

file = open(data_path)
json_str = file.read()
projects = loads(json_str)

for item in projects:
    item["body_html"] = markdown.markdown(item.pop("body_md"))

with open(output_path,'w') as f:
    dump(projects, f, indent=2,ensure_ascii=False)