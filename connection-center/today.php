[minti_table style="3"]</p>
<table width="100%" 
    style="text-align: left; 
    border:3px solid black; 
    border-radius: 5px; 
    order-collapse:initial;">
<thead>
<tr>
<th style="background:#1279be; padding: 5px 15px;" width="30%" >Event</th>
<th style="background:#1279be; padding: 5px 15px;" width="30%">Location</th>
<th style="background:#1279be; padding: 5px 15px;" width="30%">Time</th>
</tr>
</thead>
<tbody>
{% set reg = "" %}
{% if urlparam.fg %}
{% set reg = urlparam.fg %}
{% endif %}
{% for i in _context %}
{% if i.StatusDescription matches '/'~reg~'/i' %}
<tr>

<!-- event column -->
<td 
    style="
        padding: 2px 15px; 
        font-size:16px; 
        color:#1279be; 
        font-weight:800;">
[minti_icon icon="fa-chevron-right" 
color="#1279be" size="16px"] {{i.Name}}<br/>
</td>

<!-- location column -->
<td 
    style="
        padding: 2px 15px; 
        font-size:16px; 
        color:#1279be; 
        font-weight:500;">
    [minti_icon icon="fa-location-arrow" 
    color="#1279be" size="16px"] {{i.LocationAddress}}
</td>

<!-- time column -->
<td>
<span 
    style="
        font-size:16px; 
        color:#1279be; 
        font-weight:300;">
    [minti_icon icon="fa-clock-o" 
    color="#1279be" size="16px"] 
    <!-- {{i.OccurrenceStartTime | date("g:ia") }} - {{i.OccurrenceEndTime | date("g:ia") }} ({{i.StatusDescription}}) -->
    {{i.OccurrenceStartTime | date("g:ia") }} - {{i.OccurrenceEndTime | date("g:ia") }}
</span>
</td>
</tr>
{% endif %}
{% endfor %}
</tbody>
</table>
[/minti_table]