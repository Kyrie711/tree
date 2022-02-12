<template>
  <div id="systemhome">
    <topnav ref="topnav" :activer="activer" :funcs="funcs"></topnav>
    <div class="app-container">
      <el-form
        :model="queryParams"
        ref="queryForm"
        v-show="showSearch"
        :inline="true"
      >
        <el-form-item label="ID" prop="userId">
          <el-input
            v-model="userId"
            placeholder="请输入用户ID"
            clearable
            size="small"
            style="width: 240px"
            @keyup.enter.native="handleQuery"
          />
        </el-form-item>
        <!-- <el-form-item label="昵称" prop="roleName">
          <el-input
            v-model="queryParams.roleName"
            placeholder="请输入用户昵称"
            clearable
            size="small"
            style="width: 240px"
            @keyup.enter.native="handleQuery"
          />
        </el-form-item>
        <el-form-item label="权限等级" prop="roleKey">
          <el-input
            v-model="queryParams.roleKey"
            placeholder="请输入权限等级"
            clearable
            size="small"
            style="width: 240px"
            @keyup.enter.native="handleQuery"
          />
        </el-form-item>
        <el-form-item label="职业" prop="rolecareer">
          <el-select
            v-model="queryParams.status"
            placeholder="用户职业"
            clearable
            size="small"
            style="width: 240px"
          >
            <el-option
              v-for="dict in statusOptions"
              :key="dict.dictValue"
              :label="dict.dictLabel"
              :value="dict.dictValue"
            />
          </el-select>
        </el-form-item> -->
        <el-form-item>
          <el-button
            type="primary"
            icon="el-icon-search"
            size="mini"
            @click="userSearch"
            >搜索</el-button
          >
          <el-button icon="el-icon-refresh" size="mini" @click="getUser"
            >重置</el-button
          >
        </el-form-item>
      </el-form>
      <el-row :gutter="10" class="mb8">
        <el-col :span="1.5">
          <el-button type="primary" plain icon="el-icon-plus" size="mini" @click="showAdd"
            >新增</el-button
          >
        </el-col>
        <el-col :span="1.5">
          <el-button type="success" plain icon="el-icon-edit" size="mini"
            >修改</el-button
          >
        </el-col>
        <!-- <el-col :span="1.5">
          <el-button type="danger" plain icon="el-icon-delete" size="mini"
            >删除</el-button
          >
        </el-col> -->
        <el-col :span="1.5">
          <el-upload
            class="upload"
            action=""
            :multiple="false"
            :show-file-list="false"
            accept=".xls,.xlsx"
            :http-request="httpRequest"
          >
            <el-button size="mini" type="info" plain icon="el-icon-upload2"
              >导入</el-button
            >
          </el-upload>
        </el-col>
        <el-col :span="1.5">
          <el-button
            type="warning"
            plain
            icon="el-icon-download"
            size="mini"
            @click="handleExport"
            >导出</el-button
          >
        </el-col>
        <!-- <right-toolbar></right-toolbar> -->
        <!-- 工具栏 -->
      </el-row>

      <el-table :data="listData">
        <el-table-column type="selection" width="55" align="center" />
        <el-table-column label="ID" prop="userId" width="120" />
        <el-table-column
          label="昵称"
          prop="username"
          :show-overflow-tooltip="true"
          width="100"
        />
        <el-table-column label="性别" prop="sex" width="100" />
        <el-table-column label="邮箱" prop="mail" width="150" />
        <el-table-column label="号码" prop="phone" width="150" />
        <el-table-column label="QQ号码" prop="qq" width="150" />
        <el-table-column
          label="权限等级"
          prop="status"
          :show-overflow-tooltip="true"
          width="150"
        />
        <el-table-column label="所在单位" prop="unit" width="150" />
        <el-table-column label="职业" prop="career" width="120" />
        <!-- <el-table-column label="显示顺序" prop="roleSort" width="100" /> -->
        <!-- <el-table-column label="状态" align="center" width="100">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.status"
              active-value="0"
              inactive-value="1"
              @change="handleStatusChange(scope.row)"
            ></el-switch>
          </template>
        </el-table-column> -->
        <el-table-column
          label="操作"
          align="center"
          class-name="small-padding fixed-width"
        >
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="text"
              icon="el-icon-edit"
              @click="handleUpdate(scope.row)"
              >修改</el-button
            >
            <!-- <el-button
              size="mini"
              type="text"
              icon="el-icon-circle-check"
              @click="handleDataScope(scope.row)"
              >数据权限</el-button
            > -->
            <el-button
              size="mini"
              type="text"
              icon="el-icon-delete"
              @click="handleDelete(scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <el-dialog v-bind="$attrs" v-on="$listeners" @open="onOpen" @close="onClose" title="新增用户信息" :visible.sync="dialogVisible">
        <el-row :gutter="15">
          <el-form ref="elForm" :model="formData" :rules="rules" size="medium" label-width="100px">
            <el-col :span="8">
              <el-form-item label="ID" prop="userId">
                <el-input v-model="formData.userId" placeholder="请输入ID" clearable :style="{width: '100%'}">
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="昵称" prop="username">
                <el-input v-model="formData.username" placeholder="请输入昵称" clearable :style="{width: '100%'}">
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="性别" prop="sex">
                <el-select v-model="formData.sex" placeholder="请选择性别" clearable
                  :style="{width: '100%'}">
                  <el-option v-for="(item, index) in sexOptions" :key="index" :label="item.label"
                    :value="item.value" :disabled="item.disabled"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="邮箱" prop="mail">
                <el-input v-model="formData.mail" placeholder="请输入邮箱" clearable :style="{width: '100%'}">
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="密码" prop="password">
                <el-input v-model="formData.password" placeholder="请输入密码" clearable :style="{width: '100%'}">
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="号码" prop="phone">
                <el-input v-model="formData.phone" placeholder="请输入号码" clearable :style="{width: '100%'}">
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="QQ号码" prop="qq">
                <el-input v-model="formData.qq" placeholder="请输入QQ号码" clearable :style="{width: '100%'}">
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="权限等级" prop="status">
                <el-select v-model="formData.status" placeholder="请选择下拉选择" clearable
                  :style="{width: '100%'}">
                  <el-option v-for="(item, index) in statusOptions" :key="index" :label="item.label"
                    :value="item.value" :disabled="item.disabled"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="所在单位" prop="unit">
                <el-input v-model="formData.unit" placeholder="请输入所在单位" clearable :style="{width: '100%'}">
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="职业" prop="career">
                <el-input v-model="formData.career" placeholder="请输入职业" clearable :style="{width: '100%'}">
                </el-input>
              </el-form-item>
            </el-col>
          </el-form>
        </el-row>
        <div slot="footer">
          <el-button @click="close">取消</el-button>
          <el-button type="primary" @click="handelConfirm">确定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import topnav from "components/common/TopNav.vue";
export default {
  // inheritAttrs: false,
  components: {},
  props: [],
  name: "Role",
  data() {
    return {
      userId: "",
      dialogVisible: false,
      listData: [],
      activer: this.$route.name || "SystemDetails",
      funcs: [
        {
          icon: "el-icon-notebook-1",
          func: "成员管理",
          name: "Admin",
          route: "",
        },
      ],
      // 遮罩层
      loading: true,
      // 导出遮罩层
      exportLoading: false,
      // 选中数组
      ids: [],
      // 非单个禁用
      single: true,
      // 非多个禁用
      multiple: true,
      // 显示搜索条件
      showSearch: true,
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 是否显示弹出层（数据权限）
      openDataScope: false,
      menuExpand: false,
      menuNodeAll: false,
      deptExpand: true,
      deptNodeAll: false,
      // 日期范围
      dateRange: [],
      // 权限数据字典
      statusOptions: [],
      // 性别数据字典
      sexOptions: [],
      // 菜单列表
      menuOptions: [],
      // 部门列表
      deptOptions: [],
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        roleName: undefined,
        roleKey: undefined,
        status: undefined,
      },
      // 表单参数
      form: {},
      formData: {
        userId: undefined,
        username: undefined,
        mail: undefined,
        phone: undefined,
        qq: undefined,
        status:undefined,
        unit: undefined,
        career: undefined,
        password: undefined,
        sex:undefined,
        userPicture: 'https://cdn.jsdelivr.net/gh/zh-hc/PicGoCDN//img/rabbit.jpg'
      },
      rules: {
        userId: [{
          required: true,
          message: '请输入ID',
          trigger: 'blur'
        }],
        username: [{
          required: true,
          message: '请输入昵称',
          trigger: 'blur'
        }],
        sex: [{
          required: true,
          message: '请选择性别',
          trigger: 'change'
        }],
        mail: [{
          required: true,
          message: '请输入邮箱',
          trigger: 'blur'
        }],
        password: [{
          required: true,
          message: '请输入密码',
          trigger: 'blur'
        }],
        phone: [{
          required: true,
          message: '请输入号码',
          trigger: 'blur'
        }],
        qq: [{
          required: true,
          message: '请输入QQ号码',
          trigger: 'blur'
        }],
        status: [{
          required: true,
          message: '请选择下拉选择',
          trigger: 'change'
        }],
        unit: [{
          required: true,
          message: '请输入所在单位',
          trigger: 'blur'
        }],
        career: [{
          required: true,
          message: '请输入职业',
          trigger: 'blur'
        }],
      },
      statusOptions: [{
        "label": "普通用户",
        "value": 1
      }, {
        "label": "管理员",
        "value": 2
      }],
      sexOptions: [{
        "label": "男",
        "value": 1
      }, {
        "label": "女",
        "value": 2
      }],
    };
  },
  components: {
    topnav,
  },
  mounted() {
    this.getUser();
  },
  created() {
    this.getList();
  },
  methods: {
    getUser() {
      console.log("来获取用户信息");
      this.$request({
        url: "/user/getUsers",
        method: "get",
      }).then((res) => {
        this.listData = res.data;
        console.log(this.listData);
        this.userId = "";
      });
    },
    // 按用户的Id查询
    userSearch() {
      console.log(this.userId);
      console.log("根据用户Id进行查询");
      this.$request({
        url: "/user/getUserById",
        method: "get",
        params: {
          userId: this.userId,
        },
      }).then((res) => {
        this.listData = res.data;
        console.log(this.listData);
      });
    },
    /** 查询角色列表 */
    getList() {
      this.loading = true;
    },
    /** 查询菜单树结构 */
    getMenuTreeselect() {
      menuTreeselect().then((response) => {
        this.menuOptions = response.data;
      });
    },
    /** 查询部门树结构 */
    getDeptTreeselect() {
      deptTreeselect().then((response) => {
        this.deptOptions = response.data;
      });
    },
    // 所有菜单节点数据
    getMenuAllCheckedKeys() {
      // 目前被选中的菜单节点
      let checkedKeys = this.$refs.menu.getCheckedKeys();
      // 半选中的菜单节点
      let halfCheckedKeys = this.$refs.menu.getHalfCheckedKeys();
      checkedKeys.unshift.apply(checkedKeys, halfCheckedKeys);
      return checkedKeys;
    },
    // 所有部门节点数据
    getDeptAllCheckedKeys() {
      // 目前被选中的部门节点
      let checkedKeys = this.$refs.dept.getCheckedKeys();
      // 半选中的部门节点
      let halfCheckedKeys = this.$refs.dept.getHalfCheckedKeys();
      checkedKeys.unshift.apply(checkedKeys, halfCheckedKeys);
      return checkedKeys;
    },
    /** 根据角色ID查询菜单树结构 */
    getRoleMenuTreeselect(roleId) {
      return roleMenuTreeselect(roleId).then((response) => {
        this.menuOptions = response.menus;
        return response;
      });
    },
    /** 根据角色ID查询部门树结构 */
    getRoleDeptTreeselect(roleId) {
      return roleDeptTreeselect(roleId).then((response) => {
        this.deptOptions = response.depts;
        return response;
      });
    },
    // 角色状态修改
    // handleStatusChange(row) {
    //   let text = row.status === "0" ? "启用" : "停用";
    //   this.$confirm(
    //     '确认要"' + text + '""' + row.roleName + '"角色吗?',
    //     "警告",
    //     {
    //       confirmButtonText: "确定",
    //       cancelButtonText: "取消",
    //       type: "warning",
    //     }
    //   )
    //     .then(function () {
    //       return changeRoleStatus(row.roleId, row.status);
    //     })
    //     .then(() => {
    //       this.msgSuccess(text + "成功");
    //     })
    //     .catch(function () {
    //       row.status = row.status === "0" ? "1" : "0";
    //     });
    // },
    // 取消按钮
    cancel() {
      this.open = false;
      this.reset();
    },
    // 取消按钮（数据权限）
    cancelDataScope() {
      this.openDataScope = false;
      this.reset();
    },
    // 表单重置
    reset() {
      if (this.$refs.menu != undefined) {
        this.$refs.menu.setCheckedKeys([]);
      }
      (this.menuExpand = false),
        (this.menuNodeAll = false),
        (this.deptExpand = true),
        (this.deptNodeAll = false),
        (this.form = {
          roleId: undefined,
          roleName: undefined,
          roleKey: undefined,
          roleSort: 0,
          status: "0",
          menuIds: [],
          deptIds: [],
          menuCheckStrictly: true,
          deptCheckStrictly: true,
          remark: undefined,
        });
      this.resetForm("form");
    },
    /** 搜索按钮操作 */
    handleQuery() {
      this.queryParams.pageNum = 1;
      this.getList();
    },
    /** 重置按钮操作 */
    resetQuery() {
      this.dateRange = [];
      this.resetForm("queryForm");
      this.handleQuery();
    },
    // 多选框选中数据
    handleSelectionChange(selection) {
      this.ids = selection.map((item) => item.roleId);
      this.single = selection.length != 1;
      this.multiple = !selection.length;
    },
    // 树权限（展开/折叠）
    handleCheckedTreeExpand(value, type) {
      if (type == "menu") {
        let treeList = this.menuOptions;
        for (let i = 0; i < treeList.length; i++) {
          this.$refs.menu.store.nodesMap[treeList[i].id].expanded = value;
        }
      } else if (type == "dept") {
        let treeList = this.deptOptions;
        for (let i = 0; i < treeList.length; i++) {
          this.$refs.dept.store.nodesMap[treeList[i].id].expanded = value;
        }
      }
    },
    // 树权限（全选/全不选）
    handleCheckedTreeNodeAll(value, type) {
      if (type == "menu") {
        this.$refs.menu.setCheckedNodes(value ? this.menuOptions : []);
      } else if (type == "dept") {
        this.$refs.dept.setCheckedNodes(value ? this.deptOptions : []);
      }
    },
    // 树权限（父子联动）
    handleCheckedTreeConnect(value, type) {
      if (type == "menu") {
        this.form.menuCheckStrictly = value ? true : false;
      } else if (type == "dept") {
        this.form.deptCheckStrictly = value ? true : false;
      }
    },
    /** 新增按钮操作 */
    handleAdd() {
      this.reset();
      this.getMenuTreeselect();
      this.open = true;
      this.title = "添加角色";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const roleId = row.roleId || this.ids;
      const roleMenu = this.getRoleMenuTreeselect(roleId);
      getRole(roleId).then((response) => {
        this.form = response.data;
        this.open = true;
        this.$nextTick(() => {
          roleMenu.then((res) => {
            let checkedKeys = res.checkedKeys;
            checkedKeys.forEach((v) => {
              this.$nextTick(() => {
                this.$refs.menu.setChecked(v, true, false);
              });
            });
          });
        });
        this.title = "修改角色";
      });
    },
    /** 选择角色权限范围触发 */
    dataScopeSelectChange(value) {
      if (value !== "2") {
        this.$refs.dept.setCheckedKeys([]);
      }
    },
    /** 分配数据权限操作 */
    handleDataScope(row) {
      this.reset();
      const roleDeptTreeselect = this.getRoleDeptTreeselect(row.roleId);
      getRole(row.roleId).then((response) => {
        this.form = response.data;
        this.openDataScope = true;
        this.$nextTick(() => {
          roleDeptTreeselect.then((res) => {
            this.$refs.dept.setCheckedKeys(res.checkedKeys);
          });
        });
        this.title = "分配数据权限";
      });
    },
    /** 提交按钮 */
    submitForm: function () {
      // this.$refs["form"].validate((valid) => {
        // if (valid) {
        //   if (this.form.roleId != undefined) {
        //     this.form.menuIds = this.getMenuAllCheckedKeys();
        //     updateRole(this.form).then((response) => {
        //       this.msgSuccess("修改成功");
        //       this.open = false;
        //       this.getList();
        //     });
        //   } else {
        //     this.form.menuIds = this.getMenuAllCheckedKeys();
        //     addRole(this.form).then((response) => {
        //       this.msgSuccess("新增成功");
        //       this.open = false;
        //       this.getList();
        //     });
        //   }
        // }
      // });
    },
    /** 提交按钮（数据权限） */
    submitDataScope: function () {
      if (this.form.roleId != undefined) {
        this.form.deptIds = this.getDeptAllCheckedKeys();
        dataScope(this.form).then((response) => {
          this.msgSuccess("修改成功");
          this.openDataScope = false;
          this.getList();
        });
      }
    },
    /** 删除按钮操作 */
    handleDelete(row) {
      const userId = row.userId
      //  || this.ids;
      this.$confirm(
        '是否确认删除ID为"' + userId + '"的用户?',
        "警告",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }
      ).then(() => {
          this.$request({
          url: "/user/deleteUserById",
          method: "delete",
          params: {userId: userId}
        }).then((res) => {
          this.$message({
              showClose: true,
              message: res.data.message,
              type: 'success'
            });
            this.getUser();  
        }).catch(() => {});
    })
    },
    /** 导出按钮操作 */
    handleExport() {
      const queryParams = this.queryParams;
      this.$confirm("是否确认导出所有角色数据项?", "警告", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$request({
            url: "/user/UserExcelDownloads",
            method: "get",
            responseType: 'blob'
          }).then((res) => {
            let link = document.createElement('a')
            let blob = new Blob([res.data], {type: 'application/vnd.ms-excel'})
            link.style.display = 'none'
            link.href = URL.createObjectURL(blob)
            link.download = res.headers['content-disposition'] //下载后文件名
            // let name = link.download.split('=')[1]
            link.download = '成员信息表' //下载的文件名
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
          }).catch(error => {
            this.$message.error('下载失败')
          })
        })
        // .then((response) => {
        //   this.download(response.msg);
        //   this.exportLoading = false;
        // })
        // .catch(() => {});
    },
    httpRequest(e) {
      let file = e.file; // 文件信息

      if (!file) {
        // 没有文件
        return false;
      } else if (!/\.(xls|xlsx)$/.test(file.name.toLowerCase())) {
        // 格式根据自己需求定义
        this.$message.error("上传格式不正确，请上传xls或者xlsx格式");
        return false;
      }

      const fileReader = new FileReader();
      fileReader.onload = (ev) => {
        try {
          const data = ev.target.result;
          const workbook = XLSX.read(data, {
            type: "binary", // 以字符编码的方式解析
          });
          const exlname = workbook.SheetNames[0]; // 取第一张表
          const exl = XLSX.utils.sheet_to_json(workbook.Sheets[exlname]); //生成json表格内容
          // 将 JSON 数据挂到 data
          this.tableData = exl;
          console.log(exl);
          // document.getElementsByName('file')[0].value = ''
          // 根据自己需求，可重置上传value为空，允许重复上传同一文件
        } catch (e) {
          console.log("出错了：：");
          return false;
        }
      };
      fileReader.readAsBinaryString(file);
    },
    showAdd() {
      this.dialogVisible = true
    },
    onOpen() {},
    onClose() {
      this.$refs['elForm'].resetFields()
    },
    close() {
      this.$emit('update:visible', false)
    },
    handelConfirm() {
      this.$request({
        url: "/user/insertUser",
        method: "post",
        params: this.formData,
      }).then((res) => {
        if(res.data.success){
          this.dialogVisible = false
          this.$message({
            message: res.data.message,
            type: 'success'
          });
          this.getUser();
        } else {
          this.$message.error(res.data.message);
        }
      });
    },
  },
};
</script>
<style>
.app-container {
  margin: 30px;
  padding-top: 64px;
}
.homecontent {
  margin-top: 64px;
  height: calc(100vh - 64px);
}
</style>