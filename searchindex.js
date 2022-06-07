Search.setIndex({docnames:["components/attentions","components/feedforward","components/index","components/mha","components/position_embedding","components/reversible","custom_parts/index","factory/block","factory/index","factory/model","index","tutorials/blocksparse","tutorials/extend_attentions","tutorials/hierarchical","tutorials/index","tutorials/pytorch_encoder","tutorials/reversible","tutorials/sparse_vit","tutorials/triton","tutorials/use_attention","what_is_xformers"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["components/attentions.rst","components/feedforward.rst","components/index.rst","components/mha.rst","components/position_embedding.rst","components/reversible.rst","custom_parts/index.rst","factory/block.rst","factory/index.rst","factory/model.rst","index.rst","tutorials/blocksparse.rst","tutorials/extend_attentions.rst","tutorials/hierarchical.rst","tutorials/index.rst","tutorials/pytorch_encoder.rst","tutorials/reversible.rst","tutorials/sparse_vit.rst","tutorials/triton.rst","tutorials/use_attention.rst","what_is_xformers.rst"],objects:{"xformers.components":{MultiHeadDispatch:[3,0,1,""],attention:[0,3,0,"-"],feedforward:[1,3,0,"-"],positional_embedding:[4,3,0,"-"]},"xformers.components.MultiHeadDispatch":{forward:[3,1,1,""],from_config:[3,1,1,""],training:[3,2,1,""]},"xformers.components.attention":{Attention:[0,0,1,""],AttentionMask:[0,0,1,""],FavorAttention:[0,0,1,""],GlobalAttention:[0,0,1,""],LinformerAttention:[0,0,1,""],LocalAttention:[0,0,1,""],NystromAttention:[0,0,1,""],OrthoFormerAttention:[0,0,1,""],RandomAttention:[0,0,1,""],ScaledDotProduct:[0,0,1,""],build_attention:[0,4,1,""],register_attention:[0,4,1,""]},"xformers.components.attention.Attention":{forward:[0,1,1,""],from_config:[0,1,1,""]},"xformers.components.attention.AttentionMask":{device:[0,1,1,""],dtype:[0,1,1,""],from_bool:[0,1,1,""],from_multiplicative:[0,1,1,""],is_sparse:[0,1,1,""],make_causal:[0,1,1,""],make_crop:[0,1,1,""],ndim:[0,1,1,""],shape:[0,1,1,""],to:[0,1,1,""],to_bool:[0,1,1,""]},"xformers.components.attention.FavorAttention":{__init__:[0,1,1,""],forward:[0,1,1,""]},"xformers.components.attention.GlobalAttention":{__init__:[0,1,1,""],forward:[0,1,1,""]},"xformers.components.attention.LinformerAttention":{__init__:[0,1,1,""],forward:[0,1,1,""]},"xformers.components.attention.LocalAttention":{__init__:[0,1,1,""],forward:[0,1,1,""]},"xformers.components.attention.NystromAttention":{__init__:[0,1,1,""],forward:[0,1,1,""]},"xformers.components.attention.OrthoFormerAttention":{__init__:[0,1,1,""],forward:[0,1,1,""]},"xformers.components.attention.RandomAttention":{__init__:[0,1,1,""],forward:[0,1,1,""]},"xformers.components.attention.ScaledDotProduct":{forward:[0,1,1,""],mask:[0,2,1,""]},"xformers.components.feedforward":{Feedforward:[1,0,1,""],MLP:[1,0,1,""],build_feedforward:[1,4,1,""],register_feedforward:[1,4,1,""]},"xformers.components.feedforward.Feedforward":{from_config:[1,1,1,""],training:[1,2,1,""]},"xformers.components.feedforward.MLP":{forward:[1,1,1,""],training:[1,2,1,""]},"xformers.components.positional_embedding":{RotaryEmbedding:[4,0,1,""],SinePositionalEmbedding:[4,0,1,""],VocabEmbedding:[4,0,1,""],build_positional_embedding:[4,4,1,""],register_positional_embedding:[4,4,1,""]},"xformers.components.positional_embedding.RotaryEmbedding":{forward:[4,1,1,""],training:[4,2,1,""]},"xformers.components.positional_embedding.SinePositionalEmbedding":{forward:[4,1,1,""],training:[4,2,1,""]},"xformers.components.positional_embedding.VocabEmbedding":{forward:[4,1,1,""],init_weights:[4,1,1,""],training:[4,2,1,""]},"xformers.components.reversible":{Deterministic:[5,0,1,""],ReversibleBlock:[5,0,1,""],ReversibleSequence:[5,0,1,""]},"xformers.components.reversible.Deterministic":{forward:[5,1,1,""],record_rng:[5,1,1,""],training:[5,2,1,""]},"xformers.components.reversible.ReversibleBlock":{backward_pass:[5,1,1,""],forward:[5,1,1,""],training:[5,2,1,""]},"xformers.components.reversible.ReversibleSequence":{forward:[5,1,1,""],training:[5,2,1,""]},"xformers.factory":{block_factory:[7,3,0,"-"],model_factory:[9,3,0,"-"]},"xformers.factory.block_factory":{xFormerDecoderBlock:[7,0,1,""],xFormerEncoderBlock:[7,0,1,""]},"xformers.factory.block_factory.xFormerDecoderBlock":{forward:[7,1,1,""],from_config:[7,1,1,""],training:[7,2,1,""]},"xformers.factory.block_factory.xFormerEncoderBlock":{forward:[7,1,1,""],from_config:[7,1,1,""],get_reversible_layer:[7,1,1,""],training:[7,2,1,""]},"xformers.factory.model_factory":{xFormer:[9,0,1,""],xFormerConfig:[9,0,1,""]},"xformers.factory.model_factory.xFormer":{__init__:[9,1,1,""],forward:[9,1,1,""],from_config:[9,1,1,""],init_weights:[9,1,1,""],training:[9,2,1,""]},"xformers.factory.model_factory.xFormerConfig":{stack_configs:[9,2,1,""],tie_embedding_weights:[9,2,1,""],weight_init:[9,2,1,""]},xformers:{triton:[6,3,0,"-"]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","attribute","Python attribute"],"3":["py","module","Python module"],"4":["py","function","Python function"]},objtypes:{"0":"py:class","1":"py:method","2":"py:attribute","3":"py:module","4":"py:function"},terms:{"1024":[11,15,19],"1182":15,"128":[13,15],"151mb":11,"1536":15,"155":15,"1950":15,"1e3":11,"1e6":11,"2017":16,"2020":[0,16],"2021":[0,18],"2048":[11,15],"224":17,"256":13,"2709":15,"3080":18,"320":13,"384":[15,19],"393mb":11,"4117":15,"512":15,"619m":11,"837m":11,"\u0142":16,"abstract":0,"boolean":[0,16],"break":20,"case":[0,15,17,18,19],"catch":15,"class":[0,1,3,4,5,7,9,12,16],"default":[6,12,15],"export":6,"float":[0,1,3,4,12,15],"function":[11,16,17],"import":[11,13,15,17,18,19],"int":[0,1,3,4,5,12,15,16],"new":[12,15,19,20],"return":[0,15,17],"short":18,"static":7,"true":[0,1,3,5,6,9,11,12,15,16,18],"try":[11,15],"while":[0,15],And:20,Doing:12,Eye:0,For:[0,1,4,15],Its:[15,16],One:16,PRs:20,That:19,The:[0,3,4,6,9,11,12,13,15,16,17,18,19],There:[6,12,15,18,19],These:[6,13,18],Use:[3,9],Using:[9,10,14],With:15,__init__:[0,9,12,16],_self_:15,_target_:15,_you:11,abl:6,ablat:20,abov:[6,15,16,17],abs:15,accept:[0,12],accuraci:16,across:[13,20],activ:[1,6,9,15,16],actual:[3,11,18],adapt:16,add_modul:17,added:15,adding:15,addit:0,additive_mask:0,advanc:15,affect:16,after:11,against:20,agnost:20,aim:20,algorithm:0,all:[0,3,10,12,14,16,18,19,20],allow:[0,1,4,19,20],alon:20,along:[0,11,13,15,18],alreadi:[11,15,17],also:[6,12,15,16,18,20],alter:17,altern:[15,17,19],although:19,alwai:15,amount:3,amp:18,ani:[0,1,4,6,9,12,17,18,20],anoth:[13,16],anyth:[11,13,20],anytim:20,api:[10,15,19],appl:15,appli:[0,12,16],applic:[12,15,16,18],approxim:0,architectur:[3,12,13,15,19,20],architur:6,arg:[0,1,3,4,5,12],arg_rout:[5,16],argument:12,art:[10,20],asano:0,aspect:17,assum:[0,1,4,15],att_mask:[0,3,7,11,17],att_val:11,attend:[0,15],attent:[1,2,4,6,9,10,11,12,14,15,16],attention_mask:0,attention_mechan:13,attention_mechanism_str:9,attention_nam:19,attention_pattern:17,attention_query_mask:[0,19],attentionconfig:[0,12],attentionmask:0,attn_drop:[9,15],attn_mask:[11,17],attribut:0,autograd:18,autom:15,automat:[6,12,20],avail:[4,9,18],awar:[0,3,17,18],backend:18,backpropag:16,backward_pass:5,ball:0,bar:[0,1,4],base:[0,1,3,4,6,7,9,10,12,14,17,19],base_hierarchical_config:13,basi:15,basic:15,basiclayerconfig:13,batch:[0,3,11,12,15,19],batch_first:[11,15],batch_submit:12,becaus:15,becom:[16,19],befor:0,being:[0,3,11,18,20],below:15,benchmark:[8,12,15,18,20],benchmark_pytorch_transform:15,benchmark_triton_dropout:18,benchmark_triton_layernorm:18,benefit:[13,16],better:[11,18],between:[9,11,13,16],bia:[1,3,15],bias:11,bigbird:0,binari:11,block:[5,6,8,10,11,12,14,20],block_config:[7,9,16],block_factori:7,block_siz:11,block_typ:[9,15],blockif:11,blockspars:11,blocksparseattent:[10,14],bonu:11,bookeep:11,bool:[0,1,3,4,5,7,9,12,16],both:[0,12],bruegger:16,build:[0,1,4,10,11,14,16,19,20],build_attent:[0,19],build_feedforward:1,build_model:15,build_positional_embed:4,built:[15,19],bypass:9,call:[0,1,4,12],campbel:0,can:[0,3,6,9,10,11,12,15,16,17,18,19,20],cannot:[0,15,20],capabl:[6,18],care:15,causal:[0,9,11,12,15],causal_layout:11,causal_mask:11,certain:0,chakraborti:0,chang:[6,11,15],check:[15,17],checkpo:12,checkpoint:16,child:17,choromanski:0,chosen:15,chunk:16,classmethod:[0,1,3,7,9],clear:17,clone:6,close:[15,16],closer:17,cluster:12,cnn:13,code:[6,12,18,19],codebas:0,coeffici:11,com:[0,6],combin:[0,10,16,19],commandlin:15,commod:11,common:6,commun:16,compar:[10,11,14,16,18,20],comparison:15,compat:[16,18],compil:[6,18],complet:[8,16,19],complex:0,compon:[0,1,3,4,5,10,11,12,16,17,19],compos:20,comprehens:6,comput:[0,6,11,16],conda:6,condit:6,config:[0,1,3,4,7,9,12,13,15],config_path:12,configur:[0,1,4,9,12,13],consid:[12,15,16,17],consolid:18,constant_mask:0,constitut:15,construct:[11,12,15],constructor:[12,15],contain:5,context:[9,16],conv_kernel_s:[0,12],convent:15,convert:11,correct:0,correspond:[9,18],cost:16,could:[11,13,15],coupl:[0,6,12,15,18],creat:[0,6,10],crop:0,cross:13,crowd:20,crucial:[4,13],cuda:[10,11,17,18],current:[6,15,18],custom:[10,15],custom_decod:15,custom_encod:15,d_model:15,data:[11,19],dataclass:12,ddp:16,deal:16,declar:15,decod:[7,9,15],decoder_att_mask:7,decoder_input_mask:9,decoder_nystrom_favor:15,decor:[0,1,4],dedic:12,def:[11,12,16,17],defer:19,defin:[9,11,12,15,16,17,20],definit:19,del:17,demonstr:15,dens:11,depend:[4,19],depth:[13,17],design:20,detail:16,determin:[0,1,4],determinist:5,develop:8,devic:[0,11,15,19],dict:[0,1,4,9,19],dict_kei:15,differ:[3,11,12,15,16],dim:[3,16,17],dim_featur:0,dim_feedforward:15,dim_head:[0,13],dim_kei:3,dim_model:[1,3,4,9,11,15,19],dim_valu:3,dimens:[0,3,11,13,15,18,19],directli:[12,15,18,19],dispatch:[3,19],distribut:[0,16],doc:15,doe:16,domain:[13,20],don:15,done:12,dot:[0,6,15],drop:[0,11,15,18],dropout:[0,1,3,4,9,11,12,15,19],dtype:[0,11,15],dummi:[15,19],duplic:15,each:[0,18,20],earli:15,easi:20,easier:13,easili:[9,15,19,20],effect:[9,16],effici:[13,16],effort:20,either:[18,19],element:[0,13,15],emb:[3,9,11,15],embed:[2,3,9,10,13,15],embed_dim:17,empti:[0,11],empty_cach:11,enabl:[6,12,18],encod:[4,7,9,10,14],encoder_att_mask:7,encoder_config:15,encoder_input_mask:9,encoder_loc:15,encoder_random:15,encodinhg:15,end:3,engin:20,enough:[6,11],entir:15,env:6,equival:[10,14,15],error:15,evalu:15,even:[0,1,4,12],evenli:0,everi:[15,20],everyth:[15,19],exact:[12,15],exactli:16,exampl:[6,9,10,11,13,15,17,18],exchang:17,exempl:15,exhaust:17,exhibit:17,exist:[10,14,15],expect:[0,3,15,18,19],experi:17,explicit:15,explicitli:12,expos:[12,15,16,17,19],express:13,extend:[10,14,15,20],extens:[12,20],extent:13,extra:[11,12,16,17],f_arg:[5,16],facebookresearch:0,fact:11,factori:[10,13,16],fairintern:6,fairli:15,fals:[0,3,5,9,12,13,15,16,17,18],famili:18,fast:[0,11,20],faster:18,favor:[0,15],favorattent:0,featur:[0,15],feature_map:0,feature_map_typ:0,featuremaptyp:0,feedforward:[2,10,15,16],feedforward_config:[9,15],feedforwardconfig:1,feichtenhof:0,few:15,field:[12,20],file:[0,1,4,19],fill:13,find:[0,1,4],fine:[11,19],first:[15,16],flag:19,flexibl:[10,15,20],float16:11,focu:20,focus:20,follow:[3,6,9,12,13,15,16,17,18,20],foo:[0,1,4],force_spars:0,forget:15,fork:12,formul:16,forward:[0,1,3,4,5,7,9,11,12,15,16],fp16:18,free:[15,16],friendli:15,from:[0,1,4,6,10,11,12,13,14,15,16,18,19],from_bool:0,from_config:[0,1,3,4,7,9,15],from_multipl:0,full:[9,10,14],fullfil:6,fung:0,fusedlayernorm:15,fusedlinearlay:18,fusedmlp:9,futur:[0,15],g_arg:[5,16],gain:4,gap:13,gcc:6,gelu:9,gener:[9,13,15],get:[11,16,17,18],get_hierarchical_configur:13,get_reversible_lay:7,git:6,github:[0,6],given:[0,1,4,9,12,17,19,20],global:0,globalattent:0,glr:18,goal:18,gomez:16,good:17,gpt:4,gpu:[6,16,18],grain:11,gross:16,half:11,handl:13,happen:20,has:[0,15],have:[11,13,15,17],head:[0,2,10,11,15,16,19],head_:11,heavi:20,help:16,helper:[0,9,11,13,16,17,19],henriqu:0,here:[0,10,11,14,15],hidden_layer_multipli:[1,9,15],hierarch:[10,14],hierarchi:15,hierarchical_config:13,hoc:18,hold:0,hopefulli:19,host:[10,14],how:[17,18],howev:13,html:18,http:[0,18],idea:17,ideal:20,ignor:0,imag:17,image_s:13,img_siz:17,implement:[0,4,6,7,15,16],impli:0,improv:[9,20],in_featur:[15,18],in_proj_contain:[3,15],includ:[9,15,16],increas:[16,18],independ:6,inf:0,inform:12,inherit:12,init_weight:[4,9],initi:19,inplac:15,input:[1,3,15,16,19],input_mask:7,input_project:3,inputproject:[3,15],insight:4,inspir:[4,20],instal:6,instanc:[0,1,4,9,12],instanti:[0,1,4,15,19],interest:[10,14,15],interfac:[12,15,18],intern:19,interoper:[10,20],inv_iter:[0,12],is_caus:0,is_spars:0,isinst:17,issu:6,iter_before_redraw:0,itself:[0,1,4],jit:18,job:[12,15],json:12,just:[11,13,15,17,18],kaiser:16,keep:[0,15],kei:[0,1,3,4,11],kept:0,kernel:[0,10,18],key_padding_mask:[0,3],kitaev:16,knob:15,kwarg:[0,1,3,4,5,7,11,12,16],label:0,landmark_pool:[0,12],landmark_select:0,landmarkselect:0,lang:18,languag:[9,18],laptop:18,larg:16,last:18,launch:15,layer:[2,9,10,13,14,16],layer_norm_ep:15,layer_norm_styl:[9,15],layernorm:17,layernorm_styl:13,layout:11,lead:15,least:12,length:[0,3,11],less:[6,16],let:[11,12,15,17],leverag:15,levskaya:16,librari:[0,1,3,4,10,15,20],lightli:16,like:[12,13,15,16,17,18,19],limit:[6,11,18],line:[11,18],linear:[0,15],linform:[0,15],linformerattent:0,list:[9,15],littl:[15,19],load:6,local:[0,12,15,18,20],localattent:[0,15],log:[12,18],log_softmax:18,longform:0,look:[11,15],loos:12,loss:15,lot:[15,19],lower:11,lra:[12,15],lsh:16,lucidrain:16,machin:6,made:16,mai:[15,17],main:16,make:[3,11,13,15,16,18,19],make_caus:0,make_crop:0,mani:[13,15,18],manual:17,map:0,mask:[0,3,6,11,15,17,19],match:[6,11,13],matric:4,matrix:11,max_memori:11,max_memory_alloc:11,maxpool:11,maybe_merge_mask:0,mean:[0,15,16,20],measur:[18,20],mechan:[2,3,10,12,14,15,17],mem_us:11,memori:[0,7,11,15,16],merg:0,met:6,metaform:13,method:[0,4],metz:0,mha:[15,16],mind:[11,17],minim:[15,17],minimum:11,misra:0,mlp:[1,9,15,16],mlp_drop:9,mlp_multipli:[9,13],mlp_ratio:17,mlpen:0,model:[3,6,8,10,13,14,16,19,20],model_factori:[9,15,16],modul:[0,1,3,4,5,6,7,9,12,16,17],module_output:17,modulelist:[5,15,16],monkei:17,more:[11,12,13,15,16,17,19,20],moreov:16,mostli:15,motionform:0,move:20,multi:[0,2,10,16,19],multi_head:[11,19],multi_head_config:[9,15],multi_head_config_cross:15,multi_head_config_mask:15,multi_head_dispatch:3,multihead:[11,19],multiheadattent:11,multiheaddispatch:[3,11,15,19],multiheaddispatchconfig:3,multipl:[0,15,16],multirun:15,must:0,my_attent:0,my_component_nam:12,my_config:[15,19],my_fancy_mask:17,my_feedforward:1,my_linear_lay:18,my_model:15,my_position_encod:4,name:[0,1,4,6,9,12,15,17,19],named_children:17,natur:16,ndim:0,need:[0,3,6,11,12,15,16],neg:0,negat:15,neox:4,net:5,network:16,nhead:15,non:18,none:[0,1,3,7,9,12,15,18],norm:[15,16],norm_lay:17,normalize_input:0,notat:0,note:[7,11,15,16,17],notebook:17,noth:6,now:[11,12,15,17],num_decoder_lay:15,num_encoder_lay:15,num_head:[0,3,9,11,12,15,17,19],num_landmark:[0,12],num_lay:[9,15,16],number:[0,3,13,16,18],nvcc:6,nvidia:[15,18],nystrom:[0,12,15],nystromattent:[0,12],nystromform:0,nystromselfattentionconfig:12,object:[0,9,15],obscur:19,odd:0,offer:15,often:6,one:[0,11,12,13,15,16,17,20],ones:11,onli:[0,6,9,10,14,18],open:[12,16],oper:18,operand:18,opposit:15,optim:[10,18,20],option:[0,1,3,7,8,9,10,12,15,16],order:12,org:18,origin:[0,13,16],ortho:0,orthoform:0,orthoformerattent:0,orthogon:0,other:[0,4,12,15,16,17,18,20],our:[11,17],out:[10,11,14,15],out_featur:[15,18],out_proj:3,output:[0,3,9,16,17],over:18,overal:0,overrid:15,own:19,packag:15,pad:[0,13],paper:[12,16],parallel:18,paramet:[0,3,15,17,19],part:[0,1,4,10,14,15],particular:[11,17],pass:[0,11,16],patch:17,patch_embed:13,patch_siz:[13,17],path:[3,12,15,16,19],patrick:0,pattern:[0,11,17],peak:11,per:[11,15],perfect:11,perform:[0,18],permut:15,pick:12,pinverse_original_init:[0,12],pip:6,pleas:[11,15,16,17],point:[12,15,18],pose_encod:15,posit:[0,2,9,10,15],position_embed:15,position_encoding_config:[9,15],positional_embed:4,positionembed:4,positionembeddingconfig:4,possibl:[9,11,13,15,18,19],post:15,postnorm:15,power:11,practic:[12,17],pre:[9,13,15],precis:17,prefer:15,prenorm:15,present:[6,13],press:9,primarili:8,primit:[15,18],print:[11,15],privat:12,probabl:[0,11,15],process:[13,16],produc:16,product:[0,6,15],program:18,programat:[10,19],progress:12,proj:15,project:3,properti:0,propos:[0,3,9,13,15,16,17,18,20],prove:13,provid:[0,3,6,11,13,18,19],pure:[15,18],purpos:8,put:15,pytest:12,python3:[12,15,18],python:[6,15,18],pytorch:[10,11,14,17,18],pytorch_multihead:11,pytorchtransform:15,qkv:17,qkv_bia:17,queri:[0,3,4,11],quit:15,rand:[15,19],randn:11,random:[0,11],randomattent:[0,15],randomli:0,ratio:0,readm:12,realli:[11,13,15,20],recipi:6,recommend:12,record_rng:5,recov:16,recurs:17,redraw:0,refer:[0,10,17,20],reform:16,regist:[0,1,3,4,12],register_attent:[0,12],register_feedforward:1,register_positional_embed:4,registr:12,rel:4,relat:[6,16],relev:[12,20],relu:[15,18],remark:12,remind:12,remov:11,ren:16,repeat:15,replac:[10,14,15,18],replace_attn_with_xformers_on:17,replic:15,repo:[4,20],report:11,repositori:[16,17],repres:0,reproduc:18,requir:[11,12,16],requires_grad:11,requires_head_dimens:19,res_drop:9,reset_peak_memory_stat:11,resid_drop:15,residu:[3,15,16],residual_dropout:[3,9,11,15,19],respons:11,result:[11,15,18],rethink:0,reus:[17,20],revers:[2,7,9,10,14,15],reversibleblock:[5,16],reversiblesequ:[5,16],robin:16,roform:4,rotari:[3,4],rotaryembed:4,rotat:4,round:11,rout:16,routingtransform:0,run:[11,15,18],run_task:12,runtim:[6,15],sai:17,said:15,same:[0,12,15,16],save:[15,16],scale:[0,6,15],scaled_dot_product:13,scaleddotproduct:[0,17],search:[19,20],see:[0,1,4,6,15,16],seem:13,self:[0,1,3,11,12,16],sens:15,septemb:18,seq:[11,15,19],seq_len:[0,4,9,11,13,15,19],sequenc:[0,3,11,13,15,16,18,19],sequenti:[15,16],serial:9,serv:18,set:[0,6,15,16],set_rng:5,setup:6,sever:17,shape:[0,15,17],share:[9,12],should:[0,15,16,19],show:17,side:0,sigmoid:18,similar:[15,18,19],similarli:[15,16],simpl:11,simpli:18,sinc:20,sinepositionalembed:4,singh:0,size:[0,3,11],skip:18,slide:0,slow:6,slurm:12,sm_reg:0,small:[11,13],smreg:0,snipper:17,snippet:12,some:[6,10,11,13,15,16,17,18,19],somebodi:20,someth:[11,12,15,16,19],sourc:[0,1,3,4,5,6,7,9,17,20],space:0,spars:[0,10,11,14],sparsifi:17,sparsiti:17,spatial:13,specif:[6,20],speed:15,sphx:18,split_dim:5,sputnik:6,squared_relu:18,src:[9,15],stack:[9,15,16],stack_config:[9,15],stand:0,start:[11,15,18],state:[10,20],step:[0,15],still:11,stop:11,store:16,str:[0,1,4,9],straightforward:19,stride:13,structur:9,studi:20,sub:0,subclass:[0,1,4],sublay:15,submit:12,subsample_fract:0,suggest:6,support:[6,15,17,18],suppos:17,sure:19,sweep:[15,19],synchron:11,systemat:15,take:[16,17,19],taken:15,tan:0,target:7,task:12,tensor:[0,1,3,4,5,7,9,12,15,16,17,18],test:[9,10,12,14,15,20],tgt:[9,15],than:[6,11,15,16,18],thei:[6,8,10],them:[3,12,16,18],thi:[0,1,3,4,7,9,11,12,13,15,16,17,18,19,20],thing:12,think:15,three:12,through:[13,20],throughput:18,tie_embedding_weight:9,ties:12,tile:11,time:[0,11,15,18],timm:17,timm_sparse_attent:17,timmsparseattent:17,titl:11,to_bool:0,to_seq_len:0,token:13,too:20,tool:12,toolbox:12,toolchain:18,top:15,torch:[0,1,3,4,5,7,9,11,12,15,16,17,18,19],torch_cuda_arch_list:6,toward:11,tradeoff:[13,16],train:[0,1,3,4,5,7,9,15],trajectori:0,tranform:[15,18],transform:[0,4,7,9,10,14,17,18,20],transformerencoderlay:15,translat:[13,17],transpar:6,triangular:11,trigger:[6,12],tril:11,triton:[9,10,11,14,15],truncat:13,tupl:[3,4,7],turn:[9,15,16,19],tutori:[6,10,15,18],two:[11,16,18,19],txt:6,type:[0,12,15],typic:[0,13,17,18],unchang:13,underli:0,union:[0,1,4,9,16],unit:[12,15,18],unload:6,unrel:16,urtasun:16,use:[3,6,11,15,16,17,18,19],use_deep_norm:9,use_razavi_pinvers:[0,12],use_rotary_embed:[3,9,13],use_separate_proj_weight:3,usecas:18,used:[0,1,3,4,6,12,15,17,18],useful:12,uses:[11,15],using:[0,6,9,16,18],util:0,v100:[11,15,18],v_skip_connect:[0,12],valu:[0,3,6,11,15,20],vanilla:[7,15],vari:3,variabl:6,variant:[12,20],variat:17,vaswani:[0,3,15,16],vedaldi:0,veri:[15,16,18,19],verifi:16,version:[6,13],via:[0,16],video:0,view:0,visibl:6,vision_transform:17,visiontransform:17,vit:[9,10,14],vocab:[9,15],vocab_s:[4,9,15],vocabembed:[4,15],wai:15,walk:15,wang:0,want:[6,12,17],warn:[0,6],weight:[3,9,17],weight_init:9,welcom:20,well:[3,17],were:8,what:[0,1,4,15],whatev:15,when:[6,15,16,17,18],where:[11,13],wherea:15,whether:[3,16,19],which:[0,1,4,6,10,11,12,13,15,16,17,18,19,20],whole:15,whose:0,window:0,window_s:0,without:16,word_embed:15,work:[12,17,19],world_siz:12,worth:15,would:[12,15,17,19],wrap:[3,16],wrap_att:15,wrap_ff:15,xformer:[0,1,3,4,5,6,7,9,11,13,14,16,17,18,19],xformer_config:[9,13],xformer_env:6,xformerblockconfig:9,xformerconfig:[9,13,15],xformerdecoderblock:7,xformerdecoderconfig:[7,16],xformerencoderblock:[7,15],xformerencoderconfig:[7,15,16],xformerstackconfig:16,xformerweightinit:9,xiong:0,yet:[7,16],you:[0,3,6,11,12,13,15,16,17,18,19,20],your:[0,12,15,16,19],zeng:0,zero:0,zoo:[10,14,20]},titles:["Attention mechanisms","Feedforward mechanisms","API Reference","Multi Head Attention","Position Embeddings","Reversible layer","Custom parts reference","Block factory","Factory","Model factory","Welcome to xFormers\u2019s documentation!","Using BlockSparseAttention","Extend the xFormers parts zoo","Hierarchical Transformers","Tutorials","Building an encoder, comparing to PyTorch","Using the Reversible block","Replace all attentions from an existing ViT model with a sparse equivalent?","Using Triton-based layers","I\u2019m only interested in testing out the attention mechanisms that are hosted here","What is xFormers?"],titleterms:{Using:[11,16,18],activ:18,all:17,api:2,attent:[0,3,17,19],base:18,bia:18,block:[7,15,16],blocksparseattent:11,build:[6,15],compar:15,cuda:6,custom:6,document:10,dropout:18,embed:4,encod:15,equival:17,exist:17,extend:12,factori:[7,8,9,15],feedforward:1,from:17,full:15,fuse:18,head:3,here:19,hierarch:13,host:19,hydra:15,interest:19,intro:16,kernel:6,layer:[5,15,18],linear:18,mechan:[0,1,19],model:[9,15,17],multi:3,norm:18,onli:19,out:19,part:[6,12],posit:4,possibl:6,practic:16,pytorch:15,refer:[2,6],replac:17,requir:6,revers:[5,16],softmax:18,spars:[6,17],test:19,transform:[13,15,16],triton:[6,18],tutori:14,usag:6,vit:17,warn:15,welcom:10,what:20,xformer:[10,12,15,20],zoo:12}})