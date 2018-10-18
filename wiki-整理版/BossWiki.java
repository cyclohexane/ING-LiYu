//21条

2.1 创建用户 
boss/user/adduser.do  Post
request （userName, password, file(upload_file)选填,phone,userType(0总监,1财务,2项目经理,3记录员)）

response

2.2 用户列表
boss/user/listableuser.do  Get
request  (pageSize,pageNum)

response page

2.3 修改用户权限或者删除
boss/user/updateuser.do Post
request (userId,userType / state(0 可用，1 不可用))



2.7 根据名字查询
boss/user/getuserbyname.do Get
request (userName,pageNum,pageSize)

response list

2.8 创建项目
boss/item/additem.do Post
request (itemName,itemDec,itemManagerId,itemManagerName,itemUploaderId,itemUploaderName,file(upload_file),endTime(2018-08-19这种格式)) //必填字段（itemName,itemDec）

response


2.10 修改项目 
boss/item/updateitem.do Post
request (itemName,itemDec,itemManagerId,itemManagerName,itemUploaderId,itemUploaderName,file(upload_file),endTime(2018-08-19这种格式))

response


2.12 新增项目文件
boss/item/addfile.do Post
request (file(upload_file),itemId)


2.13 删除项目文件
boss/item/deletefile.do Post
request (itemId,fileName,name)//fileName路径  name文件名字

response list

2.14 得到相关权限用户
boss/item/getuserforcheck.do Get
request (userType)

response list

2.16 添加材料
boss/category/addcategory.do Post
request (categoryName,specifications,unit) //必填字段 categoryName

response 

2.17 删除材料
boss/category/deletecategory.do Post
request (categoryId)

response

2.18 材料列表
boss/category/categorylist.do Get
request(pageSize,pageNum)

response page

2.19 更新材料
boss/category/updatecategory.do Post
request (categoryName,specifications,unit)

response

2.20 根据名字查询
boss/category/getcategorybyname.do Get
request (categoryName,pageNum,pageSize)

response list

2.21 添加供应商
boss/offer/addofferer.do
request (offerCompany,offerPhone,address) //必填字段 offerCompany

response

2.22 删除供应商
boss/offer/deleteofferer.do
request (offerId)

response

2.23 供应商列表
boss/offer/offererlist.do
request (pageNum, pageSize)

response page

2.24 修改供应商 
boss/offer/updateofferer.do
request (offerCompany,offerPhone,address) 

response

2.25 根据名字查询
boss/offer/getoffererbyname.do
request (offerCompany,pageNum,pageSize)

response list

2.26 根据供货商id获得材料
boss/offer/getofferbyid.do
request (offerId)

response list

2.30 根据供应商id获得记录
boss/record/listbyofferid.do get
request  (pageNum,pageSize,state,offerId) 除了state都是必传字段

