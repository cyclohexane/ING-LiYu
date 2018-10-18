//7+6+3+2=18条

所有公用（7/7）：

@ 1.登入 POST
login/login.do
request （userName, password）

response
User对象


@ 2.4 个人详情 GET
boss/user/getuserinfo.do
request (userId)
financial/user/getuserinfo.do
request null
manager/user/getuserinfo.do
request null
uploader/user/getuserinfo.do
request null

response  User对象


@ 2.5 退出 POST
boss/user/logout.do
request  null


@ 2.6 更新个人信息 POST
request (userName, password, file(upload_file),phone)

boss/user/updatemyself.do
financial/user/updatemyself.do
manager/user/updatemyself.do
uploader/user/updatemyself.do


@ 2.27 记录列表 GET
//必传pageSize和pageNum

boss/record/list.do
request(pageSize, pageNum,type,state,itemId)
financial/record/list.do
request (pageSize, pageNum,type,state，itemId)
manager/record/list.do
request (pageSize, pageNum,type,state)
uploader/record/list.do
request (pageSize, pageNum,type,state)


@ 2.28 根据id获得记录 GET
request (recordId)

boss/record/getrecordbyid.do
financial/record/getrecordbyid.do
manager/record/getrecordbyid.do
uploader/record/getrecordbyid.do


@ 2.29 根据描述获得记录 GET
//这里如果是boss或者财务都是查出所有项目的这个描述记录，
//项目经理是该项目的，上传员是自己的上传的
request (pageSize, pageNum,state,recordDec) 除了state都是必传字段

boss/record/listbydec.do
financial/record/listbydec.do
manager/record/listbydec.do
uploader/record/listbydec.do



(Manager&Uploader)共用（3/6  3/3）：

@ 1.1 上传记录 POST
request (recordType(记录类型)，recordDec(记录描述，相当于名字等等),offerId，unitPrice,number,(多个文件名都写成这个upload_file)recordImgs) 
//recordImgs 和offerId选填

manager/record/addrecord.do
uploader/record/addrecord.do

response 成功或失败

1.2 增加图片 POST
request (recordId,uploader_file)

manager/record/addrecordimg.do
uploader/record/addrecordimg.do


1.3 删除图片 POST
manager/record/addrecordimg.do
uploader/record/addrecordimg.do


@ 1.4 得到自己项目信息 GET
manager/item/itemdetail.do
uploader/item/itemdetail.do


1.8 修改字段记录 POST
request (recordType(记录类型)，recordDec(记录描述，相当于名字等等),offerId，unitPrice,number) 

manager/record/update.do
uploader/record/update.do


@ 2.3 根据id来删除记录 POST
request (recordId)

boss/record/deletebyrecordid.do
manager/record/deletebyrecordid.do //第二次审核前能删除
uploader/record/deletebyrecordid.do //第一次审核前能删除



(Boss&Financial)共用（3/3）：

@ 2.9 项目列表 GET
request (pageSize,pageNum)

boss/item/listitem.do
financial/item/listitem.do


@ 2.11 通过名字查询项目 GET
boss/item/getitembyname.do
request (itemName,pageNum,pageSize)
financial/item/getitembyname.do
request (itemName)


@ 2.15 通过id获得项目 GET 
request (itemId)

boss/item/getitembyid.do
financial/item/getitembyid.do


(Financial&Manager)共用（2/2）：


@ 1.2 审核记录 POST
request (recordId)

financial/record/check.do
manager/record/check.do


@ 2.0 根据id拒绝记录 POST
//拒绝后state设置为10
request (recordId,recordRefuse理由)

financial/record/refuserecord.do
manager/record/refuserecord.do