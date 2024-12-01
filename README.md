# dockerSite

This is a project that focuses on usage of docker to create a simple app.


The setup is described in:

https://github.com/PatrykWenz-4/DockerUsage/blob/main/README.md


Right now the app fetches correctly data, from backend endpoints.

![image](https://github.com/user-attachments/assets/4dfbfa42-07d1-4b03-b807-48ae2c1f02b5)

![image](https://github.com/user-attachments/assets/bd4e104e-31f3-4f3d-a3c4-5b26cad1c2d3)

![image](https://github.com/user-attachments/assets/73e08d21-3325-43ea-8a98-8e5184cc7b35)

----------------------------------------------------------------------------------------

Improving UI with react-bootstrap.

in order to install additional library into docker:
  1. Enter container
  2. Install library

In my case:

![image](https://github.com/user-attachments/assets/ab7dad27-4ab4-4779-8240-0afaa2b8c520)


docker exec -it 419fc4edb5c9 sh

# npm install react-bootstrap bootstrap

