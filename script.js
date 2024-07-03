$(document).ready(function() {
    $('#add-table').on('click', function() {
        var newTable = `
            <div class="table-scrollable">
                <table class="table-bordered ">
                    <colgroup>
                        <col style="width: 15%;">
                        <col style="width: 35%;">
                        <col style="width: 15%;">
                        <col style="width: 35%;">
                    </colgroup>
                    <tbody>
                        <tr>
                            <th>사업명</th>
                            <td colspan="3">
                                <input type="text" class="input-box" placeholder="사업명">
                            </td>
                        </tr>
                        <tr>
                            <th>사업기간</th>
                            <td>
                                <input type="date" class="date">
                                <span>~</span>
                                <input type="date" class="date date-2">
                            </td>
                            <th>사업단계</th>
                            <td>
                                <select class="selectbox">
                                    <option>사업단계선택</option>
                                    <option value="">설계 단계</option>
                                    <option value="">시공 단계</option>
                                    <option value="">준공 단계</option>
                                    <option value="">유지관리 단계</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th>발주기관</th>
                            <td colspan="3">
                                <input type="text" class="input-box information1" placeholder="담당부서">
                                <input type="text" class="input-box information2" placeholder="담당자">
                                <input type="text" class="input-box information3" placeholder="담당자 연락처">
                            </td>
                        </tr>
                        <tr>
                            <th>건설사</th>
                            <td colspan="3">
                                <input type="text" class="input-box information1" placeholder="담당부서">
                                <input type="text" class="input-box information2" placeholder="담당자">
                                <input type="text" class="input-box information3" placeholder="담당자 연락처">
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `;
        $('#table-container').append(newTable);
    });

    $('#minus-table').on('click', function() {
        $('#table-container .table-scrollable:last').remove();
    });
});
