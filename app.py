from flask import Flask, render_template, request,jsonify
import joblib
model=joblib.load("stress-calculator.joblib")

app = Flask(__name__)

@app.route("/",methods=['GET','POST'])
def home():
    if request.method=='POST':
        #getting data from the form
        sleep_quality=int(request.form.get('sleep-quality'))
        headache=int(request.form.get('headaches'))
        academic_perf=int(request.form.get('academic-performance'))
        study_load=int(request.form.get('study-load'))
        extracurricular=int(request.form.get('extracurricular'))

        X=[[sleep_quality,headache,academic_perf,study_load,extracurricular]]

        prediction=model.predict(X)
        stress=prediction[0]
        return jsonify({'stress_prediction' : int(stress)})
    return render_template('index.html')
        

if __name__=='__main__':
    app.run(debug=True)

