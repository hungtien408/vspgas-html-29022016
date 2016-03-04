<%@ Page Title="" Language="C#" MasterPageFile="~/site.master" AutoEventWireup="true" CodeFile="nguon-nhan-luc.aspx.cs" Inherits="nguon_nhan_luc" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
    <title>VSPGas</title>
    <meta name="description" content="VSPGas" />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <div class="container">
        <div id="site">
            <a id="A1" href="~/" runat="server" class="home">Trang chủ <span class="fa fa-caret-right">
            </span></a><a href="#">Giới thiệu <span class="fa fa-caret-right"></span></a><span>Nguồn nhân lực</span>
        </div>
        <h2 class="title text-uppercase">
            Nguồn nhân lực</h2>
        <div class="wrapper-text">
            <ul class="list-csvc">
                <li><strong>Tổng biên chế có 273 CBCNV (chủ yếu công tác trên công trình biển)</strong></li>
                <li><strong>Chuyên viên Nga: 19 chuyên viên</strong></li>
                <li>
                    <p><strong>CBCNV Việt Nam:</strong></p>
                    <%--<p>Tiến sỹ: 2 người</p>
                    <p>Thạc sỹ: 19 người</p>
                    <p>Kỹ sư và cử nhân: 121 người</p>--%>
                    <ul style="list-style: none;">
                        <li>Tiến sỹ: 2 người</li>
                        <li>Thạc sỹ: 19 người</li>
                        <li>Kỹ sư và cử nhân: 121 người</li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="cphPopup" Runat="Server">
</asp:Content>

