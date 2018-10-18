1.登入
/project/login/login.do  Post
request （userName, password）

response
{
User对象
}

2 boss相关接口
2.1 创建用户 
/projetc/boss/user/adduser.do  Post
request （userName, password, file(upload_file)选填,phone,userType(0总监,1财务,2项目经理,3记录员)）

response

2.2 用户列表
/projetc/boss/user/listableuser.do  Get
request  (pageSize,pageNum)

response page

2.3 修改用户权限或者删除
/projetc/boss/user/updateuser.do Post
request (userId,userType / state(0 可用，1 不可用))

2.4 个人详情
/projetc/boss/user/getuserinfo.do  Get
request （userId);

response  User对象

2.5 退出
/projetc/boss/user/logout.do Post
request  null

response

2.6 更新个人信息
/projetc/boss/user/updatemyself.do Post
request (userName, password, file(upload_file),phone)

2.7 根据名字查询
/projetc/boss/user/getuserbyname.do Get
request (userName,pageNum,pageSize)

response list

2.8 创建项目
/projetc/boss/item/additem.do Post
request (itemName,itemDec,itemManagerId,itemManagerName,itemUploaderId,itemUploaderName,file(upload_file),endTime(2018-08-19这种格式)) //必填字段（itemName,itemDec）

response

2.9 项目列表
/projetc/boss/item/listitem.do Get
request (pageSize,pageNum)

response page

2.10 修改项目 
/projetc/boss/item/updateitem.do Post
request (itemName,itemDec,itemManagerId,itemManagerName,itemUploaderId,itemUploaderName,file(upload_file),endTime(2018-08-19这种格式))

response

2.11 通过名字查询项目
/projetc/boss/item/getitembyname.do Get
request (itemName,pageNum,pageSize)

response list

2.12 新增项目文件
/projetc/boss/item/addfile.do Post
request (file(upload_file),itemId)


2.13 删除项目文件
/projetc/boss/item/deletefile.do Post
request (itemId,fileName,name)//fileName路径  name文件名字

response list

2.14 得到相关权限用户
/projetc/boss/item/getuserforcheck.do Get
request (userType)

response list

2.15 通过id获得项目 
/projetc/boss/item/getitembyid.do Get
request (itemId)

2.16 添加材料
/projetc/boss/category/addcategory.do Post
request (categoryName,specifications,unit) //必填字段 categoryName

response 

2.17 删除材料
/projetc/boss/category/deletecategory.do Post
request (categoryId)

response

2.18 材料列表
/projetc/boss/category/categorylist.do Get
request（pageSize,pageNum)

response page

2.19 更新材料
/projetc/boss/category/updatecategory.do Post
request (categoryName,specifications,unit)

response

2.20 根据名字查询
/projetc/boss/category/getcategorybyname.do Get
request (categoryName,pageNum,pageSize)

response list

2.21 添加供应商
/projetc/boss/offer/addofferer.do
request (offerCompany,offerPhone,address) //必填字段 offerCompany

response

2.22 删除供应商
/projetc/boss/offer/deleteofferer.do
request (offerId)

response

2.23 供应商列表
/projetc/boss/offer/offererlist.do
request (pageNum, pageSize)

response page

2.24 修改供应商 
/projetc/boss/offer/updateofferer.do
request (offerCompany,offerPhone,address) 

response

2.25 根据名字查询
/projetc/boss/offer/getoffererbyname.do
request (offerCompany,pageNum,pageSize)

response list

2.26 根据id获得offerMaterial
/projetc/boss/offer/getofferbyid.do
request (offerId)

response list

2.27 记录列表
/projetc/boss/record/list.do get
request(pageSize, pageNum,type,state,itemId)

2.28 根据id获得记录
/project/boss/record/getrecordbyid.do get
request recordId

2.29 根据描述获得记录
/project/boss/record/listbydec.do get
request （pageSize, pageNum,state,recordDec）除了state都是必传字段//这里如果是boss或者财务都是查出所有项目的这个描述记录，项目经理是该项目的，上传员是自己的上传的

2.30 根据供应商id获得记录
/project/boss/record/listbyofferid.do get
request  (pageNum,pageSize,state,offerId) 除了state都是必传字段

2.31 根据id删除记录
/project/boss/record/listbyofferid.do Post
request recordId
