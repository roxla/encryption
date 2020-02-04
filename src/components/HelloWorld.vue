<template>
  <div id="hello">
    <el-tabs v-model="activeName">
      <el-tab-pane label="加密解密" name="first">
        <div class="text">加密：</div>
        <div style="margin-bottom: 10px;">
          <el-input
            type="textarea"
            :autosize="{ minRows: 1, maxRows: 4}"
            v-model="lock"
            @blur="Locked">
          </el-input>
        </div>
        <div class="show">{{locked}}</div>
        <div class="text">解密：</div>
        <div style="margin-bottom: 10px;">
          <el-input
            type="textarea"
            :autosize="{ minRows: 1, maxRows: 4}"
            v-model="onlock"
            @blur="onLocked">
          </el-input>
        </div>
        <div class="show">{{onlocked}}</div>
      </el-tab-pane>
      <!-- <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane> -->
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      activeName: 'first',
      lock:"",
      locked:"",
      onlock:"",
      onlocked:""
    }
  },
  methods:{
    Locked(){
      let str = Base64.encode(JSON.stringify(this.lock));
      // Unicode加密
      let res = [];
      for (let i=0;i<str.length;i++) {
        res[i] = (str.charCodeAt(i).toString(16)).slice(-2);
      }
      let locked = "";
      for(let j=0;j<res.length;j++){
        locked += res[j];
      }
      // 密码表
      this.locked = '';
      let keyword = this.key;
      for(let k=0;k<locked.length;k++){
        for(let v=0;v<keyword.length;v++){
          if(locked[k] == keyword[v].key){
            this.locked += keyword[v].value;
          }
        }
      }
    },
    onLocked(){
      // 密码表
      let keyword = this.key;
      let res = "";
      for(let k=0;k<this.onlock.length;k++){
        for(let v=0;v<keyword.length;v++){
          if(this.onlock[k] == keyword[v].value){
            res += keyword[v].key;
          }
        }
      }
      // Unicode解码
      let str = [];
      for(let i=0;i<(res.length/2);i++){
        str[i] = '\\u00' + res.charAt(2*i) + res.charAt(2*i+1);
      }
      let onlocked = ""
      for(let j=0;j<str.length;j++){
        onlocked += unescape(str[j].replace(/\\/g,'%'));
      }
      this.onlocked = Base64.decode(onlocked);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#hello{
  height: calc(100vh - 16px);
}
.text{
  text-align: left;
  margin-bottom: 5px;
}
.show{
  height: 100px;
  overflow-y: scroll;
  margin-bottom: 10px;
  padding: 0px 10px;
  width: calc(100% - 20px);
  text-align: left;
  word-break: break-word;
}
</style>
