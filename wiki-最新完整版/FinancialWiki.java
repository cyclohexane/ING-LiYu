1.财务员相关接口
1.1 获得记录列表
/project/financial/record/list.do Get
request (pageSize, pageNum,type,state，itemId) //必传pageSize和pageNum

1.2 审核记录
/project/financial/record/check.do Post
request (recordId)

1.3 项目列表
/projetc/financial/item/listitem.do Get
request (pageSize,pageNum)

1.4 通过名字查询项目
/projetc/financial/item/getitembyname.do Get
request (itemName)

1.5 通过id获得项目 
/projetc/financial/item/getitembyid.do Get
request (itemId)






1.6 修改自己的信息
/project/financial/user/updatemyself.do post
request (userName, password, file(upload_file),phone)

1.7 查看个人的信息
/project/financial/user/getuserinfo.do get
request null






1.9 根据id获得记录
/project/financial/record/getrecordbyid.do get
request recordId

2.0 根据id拒绝记录
/project/financial/record/refuserecord.do post
request (recordId,recordRefuse理由) 拒绝后state设置为10

2.1 根据描述获得记录
/project/financial/record/listbydec.do get
request （pageSize, pageNum,state,recordDec）除了state都是必传字段//这里如果是boss或者财务都是查出所有项目的这个描述记录，项目经理是该项目的，上传员是自己的上传的