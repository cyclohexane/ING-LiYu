1.记录员相关接口
1.1 上传记录
/project/uploader/record/addrecord.do post
request (recordType(记录类型)，recordDec(记录描述，相当于名字等等),offerId，unitPrice,number,(多个文件名都写成这个upload_file)recordImgs) //recordImgs 和offerId选填
response 成功或失败

1.2增加图片
/project/uploader/record/addrecordimg.do post
request (recordId,uploader_file)

1.3删除图片
/project/uploader/record/addrecordimg.do post
request (recordId,fileName)

1.4得到自己项目信息
/project/uploader/item/itemdetail.do get
request null




1.5修改自己的信息
/project/uploader/user/updatemyself.do post
request (userName, password, file(upload_file),phone)

1.6查看个人的信息
/project/uploader/user/getuserinfo.do get
request null




1.7获得记录列表
/project/uploader/record/list.do get
request (pageSize, pageNum,type,state) //必传pageSize和pageNum

1.8修改字段记录
/project/uploader/record/update.do post
request (recordType(记录类型)，recordDec(记录描述，相当于名字等等),offerId，unitPrice,number) 

1.9 根据id获得记录
/project/uploader/record/getrecordbyid.do get
request recordId

2.0 根据描述获得记录
/project/uploader/record/listbydec.do get
request （pageSize, pageNum,state,recordDec）除了state都是必传字段//这里如果是boss或者财务都是查出所有项目的这个描述记录，项目经理是该项目的，上传员是自己的上传的

2.1 根据id来删除记录
/project/uploader/record/deletebyrecordid.do post //第一次审核前能删除
request (recordId)
