# todo로 ssr과 csr의 차이를 알아보자.

### site link: https://todo-client-wine.vercel.app/

해당 프로젝트는 부트캠프에서 팀 프로젝트 도중에 팀원분들이 server component에 대한 이해도가 부족하여,   
next js의 기능을 못쓰는 부분이 아쉬워서 간단한 어플인 Todo를 통해 이해를 돕고자 하기 위해 제작한 프로젝트입니다.   
![image](https://github.com/user-attachments/assets/a3944855-d449-4355-9c78-d48de69d278a)

위와 같이 server가 제공되며 해당 서버는 express + prsima로 간단하게 구현하였습니다.   
server github link: https://github.com/ugaugaugaugaugauga/todo-server   

![image](https://github.com/user-attachments/assets/0a6b68db-7a5c-48ee-b02a-e4a24661cec9)   
이처럼 홈페이지는 여러 예시를 한번에 볼수있게 link button들이 있습니다.    
크게 client fetch, server fetch로 나눌수 있으며,    

![image](https://github.com/user-attachments/assets/26da1603-d55d-4929-a4a8-5af08e7d10a3)   
위의 3개가 client fetch이며,   
![image](https://github.com/user-attachments/assets/69bef593-794a-4579-a9ba-8452d3a24a47)   
아래의 server component가 server fetch입니다.   

![image](https://github.com/user-attachments/assets/c0da8803-9e10-43e9-b9d2-07040c2204b3)    
콘탠츠는 CRUD가 다 들어가 있으며 추가적으로 완료 버튼과 fetch time을 볼수있는 label이 있습니다.   
